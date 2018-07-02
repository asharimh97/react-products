import React, { Component, Fragment } from 'react'

class ProductList extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <Fragment>
        <h4>{ this.props.productCategory }</h4>
        {
          this.props.products
            .filter(product => product.category === this.props.productCategory)
            .map(product => {
              if(this.props.onlyAvailable){
                return (product.stocked &&
                <p key={ Math.random() * 100 }>{ `${ product.name } (${ product.price })` }</p>)
              }else{
                return ( product.stocked ?
                <p key={ Math.random() * 100 }>{ `${ product.name } (${ product.price })` }</p> : 
                <p className="no-product" key={ Math.random() * 100 }>{ `${ product.name } (${ product.price })` }</p>)
              }
            })
        }
      </Fragment>
    );
  }
}

export default ProductList