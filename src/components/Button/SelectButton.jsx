export default function SelectButton({ children, variant }) {
  return <select className={`button ${variant}`}>{children}</select>;
}
