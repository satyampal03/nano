function convertTitleCase(title) {
  const exceptions = ['a', 'an', 'the', 'but', 'or', 'on', 'in', 'with', 'and'];
  const capitalize = word => word[0].toUpperCase() + word.slice(1);
  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map((word, i) =>
      exceptions.includes(word) && i !== 0 ? word : capitalize(word)
    )
    .join(' ');
  return titleCase;
}


console.log(convertTitleCase('Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'));

