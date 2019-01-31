import styled from 'styled-components';

export const ProductWrapper = styled.div`
  position: relative;
  padding: 0.5rem 0 2rem;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
  background: ${props => props.theme.white};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  flex: 1;

  &.product--modal {
    padding: 0;
    box-shadow: none;
  }

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

  .product__heading {
    margin-bottom: 0.5rem;
  }

  .product__pricing {
    padding: 1rem 0;
    color: ${props => props.theme.tertiaryColor};
    font-weight: bold;
  }

  .product__image {
    min-width: 100%;
    margin-bottom: 1rem;
    height: 10rem;
  }
`;

export const ProductImage = styled.img`
  max-width: 100%;
`;

export const ProductTitle = styled.h1`
  border-bottom: 1px dotted ${props => props.theme.lightGrey};
  padding-bottom: 1rem;
`;

export const ProductDetailsWrapper = styled.section`
  .product-description {
    @media only screen and (min-width: 48em) {
      padding-left: 2rem;
    }
  }

  .product-specification__price {
    color: ${props => props.theme.midGrey};
  }

  .product-description__product-number {
    color: ${props => props.theme.midGrey};
  }
`;
