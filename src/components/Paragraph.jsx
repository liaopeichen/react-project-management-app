export default function Paragraph({ children, textColor, ...props }) {
  const classes = "text-stone-400 mb-4 ";

  return (
    <p className={classes + textColor} {...props}>
      {children}
    </p>
  );
}
