type Props = {
  text: string;
};

/**
 * Renders a basic div element containing the provided text.
 *
 * @param {Object} props - Component properties.
 * @param {string} props.text - The text to be displayed inside the div.
 * @returns {JSX.Element} The rendered div element.
 */
export function BasicDiv({ text }: Props) {
  return <div>{text}</div>;
}
