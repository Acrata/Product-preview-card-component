import CardContainer from './CardStyles'

/**
* Component for showing a card product
* @component
*
*/

const Card = (product: Tproduct[]): JSX.Element => {
  console.log(product, 'product')
  return (
    <CardContainer>
      <div className='product-image'>
        {/* <img */}
        {/*   srcSet={`${product.image.src[0]} 1000w, */}
        {/*   ${imageDesktop} 1200w`} */}
        {/*   src={imageMobile} */}
        {/*   alt='Product image description' */}
        {/* /> */}
      </div>
      <div className='content'>
        <header>
          <p>Perfume</p>
          <h2>Gabrielle essence eau de parfum</h2>
        </header>
        <div className='desciption'>
          <p className='copy'>A floral, solar and voluptuos interpretation composed by Oliver Polge, Perfume-Creator for the house of CHANNEL</p>
          <div className='price'>
            <p className='price-tag'>$149.99</p><p className='discount-from'>$169.99</p>
          </div>
        </div>
        <button> <span>Add to Cart</span></button>
      </div>
    </CardContainer>
  )
}

export default Card
