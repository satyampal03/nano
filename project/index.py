import logging
import random
from aiogram import Bot, Dispatcher, types
from aiogram.utils import executor
from aiogram.types import InlineKeyboardMarkup, InlineKeyboardButton

API_TOKEN = "YAHAN_API_TOKEN_PASTE_KARO"  # Replace with your BotFather token

logging.basicConfig(level=logging.INFO)
bot = Bot(token=API_TOKEN)
dp = Dispatcher(bot)

games = {}  # chat_id : {"players": [], "turn": 0, "positions": {}}

start_kb = InlineKeyboardMarkup(row_width=2)
start_kb.add(
    InlineKeyboardButton("🎮 Create Game", callback_data="create_game"),
    InlineKeyboardButton("➕ Join Game", callback_data="join_game"),
    InlineKeyboardButton("🏆 Leaderboard", callback_data="leaderboard")
)

roll_kb = InlineKeyboardMarkup(row_width=1)
roll_kb.add(InlineKeyboardButton("🎲 Roll Dice", callback_data="roll_dice"))

@dp.message_handler(commands=['start'])
async def start(message: types.Message):
    await message.reply(
        "🎲 Welcome to Ludo Bot!\nChoose an option below:",
        reply_markup=start_kb
    )

@dp.callback_query_handler(lambda c: c.data == "create_game")
async def create_game(callback_query: types.CallbackQuery):
    chat_id = callback_query.message.chat.id
    games[chat_id] = {"players": [], "turn": 0, "positions": {}}
    await bot.send_message(chat_id, "New game created! Click 'Join Game' to join.", reply_markup=start_kb)

@dp.callback_query_handler(lambda c: c.data == "join_game")
async def join_game(callback_query: types.CallbackQuery):
    chat_id = callback_query.message.chat.id
    user = callback_query.from_user
    if chat_id not in games:
        await bot.send_message(chat_id, "No active game. Create a new game first.", reply_markup=start_kb)
        return
    if user.id not in games[chat_id]["players"]:
        games[chat_id]["players"].append(user.id)
        games[chat_id]["positions"][user.id] = 0
        await bot.send_message(chat_id, f"{user.first_name} joined the game!")
    else:
        await bot.send_message(chat_id, "You are already in the game!")
    if len(games[chat_id]["players"]) >= 2:
        first_player_id = games[chat_id]["players"][games[chat_id]["turn"]]
        await bot.send_message(chat_id, f"Game ready! First turn: {first_player_id}", reply_markup=roll_kb)

@dp.callback_query_handler(lambda c: c.data == "roll_dice")
async def roll_dice(callback_query: types.CallbackQuery):
    chat_id = callback_query.message.chat.id
    user = callback_query.from_user
    if chat_id not in games or user.id not in games[chat_id]["players"]:
        await bot.send_message(chat_id, "You are not in a game.")
        return
    current_turn = games[chat_id]["turn"]
    player_id = games[chat_id]["players"][current_turn]
    if user.id != player_id:
        await bot.send_message(chat_id, "It's not your turn!")
        return
    dice = random.randint(1, 6)
    games[chat_id]["positions"][user.id] += dice
    await bot.send_message(chat_id, f"{user.first_name} rolled a {dice}! Current position: {games[chat_id]['positions'][user.id]}")
    if games[chat_id]["positions"][user.id] >= 20:
        await bot.send_message(chat_id, f"🏆 {user.first_name} won the game!")
        games.pop(chat_id)
        return
    games[chat_id]["turn"] = (games[chat_id]["turn"] + 1) % len(games[chat_id]["players"])
    next_player_id = games[chat_id]["players"][games[chat_id]["turn"]]
    await bot.send_message(chat_id, f"Next turn: {next_player_id}", reply_markup=roll_kb)

@dp.callback_query_handler(lambda c: c.data == "leaderboard")
async def leaderboard(callback_query: types.CallbackQuery):
    chat_id = callback_query.message.chat.id
    if chat_id not in games:
        await bot.send_message(chat_id, "No active game currently.")
        return
    leaderboard_text = "🏆 Current Positions:\n"
    for pid, pos in games[chat_id]["positions"].items():
        leaderboard_text += f"Player {pid}: {pos}\n"
    await bot.send_message(chat_id, leaderboard_text)

if name == 'main':
    executor.start_polling(dp, skip_updates=True)