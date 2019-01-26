import styled from 'styled-components';

export const ProductWrapper = styled.div`
  .product__rating-count {
    color: ${props => props.theme.midGrey};
  }

  .product__pricing {
    padding: 0.5rem 0;
    font-size: 1.05rem;
    color: ${props => props.theme.midGrey};
  }

  .product__heading {
    margin-bottom: 0.5rem;
  }

  .product__pricing {
    padding: 0.5rem 0;
  }

  .product__image {
    margin-bottom: 0.5rem;
  }
`;

export const ProductImage = styled.img`
  max-width: 100%;
  margin-bottom: 0.5rem;
  box-shadow: 3px 5px 6px -6px rgba(0,0,0,0.8);
`;

export const ProductTitle = styled.h1`
  text-align: center;
  border-bottom: 1px dotted ${props => props.theme.lightGrey};
  padding-bottom: 1rem;
`;

export const ProductDetailsWrapper = styled.section`
  .product-specification__price {
    color: ${props => props.theme.midGrey};
  }

  .product-description__mpn-number {
    color: ${props => props.theme.midGrey};
  }
`;
