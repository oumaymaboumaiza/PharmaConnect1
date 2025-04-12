export default function Button({ children, ...props }) {
  return (
    <button className="ui-button" {...props}>
      {children}
    </button>
  );
}