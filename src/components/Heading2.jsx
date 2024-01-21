export default function Heading2({ children, textColor, ...props }) {
  const classes = "text-xl font-bold text-stone-500 my-4 ";

  return (
    <h2 className={classes + textColor} {...props}>
      {children}
    </h2>
  );
}
