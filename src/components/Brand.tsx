interface Props {
    brand: string;
  }

const Brand = ({brand}: Props) => {
  return (
      <div className="brand">
        <h1 className="brand-text">{brand}</h1>
      </div>
  )
}

export default Brand