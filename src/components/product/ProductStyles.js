import styled from 'styled-components';

export const ProductWrapper = styled.div`
  padding: 1rem;
  background: ${props => props.theme.white};

  .product__link {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .product__rating {
    &-count {
      color: ${props => props.theme.midGrey};
    }
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
    color: ${props => props.theme.tertiaryColor};
    font-weight: bold;
  }

  .product__image {
    margin-bottom: 0.5rem;
  }
`;

export const ProductImage = styled.img`
  max-width: 100%;
  @media only screen and (min-width: 480px) {
    min-height: 10rem;
  }
`;

export const ProductTitle = styled.h1`
  border-bottom: 1px dotted ${props => props.theme.lightGrey};
  padding-bottom: 1rem;
`;

export const ProductDetailsWrapper = styled.section`
  .product-specification__price {
    color: ${props => props.theme.midGrey};
  }

  .product-description__product-number {
    color: ${props => props.theme.midGrey};
  }
`;
