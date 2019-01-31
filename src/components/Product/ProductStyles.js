import styled from 'styled-components';

export const ProductWrapper = styled.div`
  position: relative;
  padding: 1rem 0 2rem;
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

  .product__title {
    padding: 0 1rem;
  }

  .product__link {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .product-image-wrapper {
    overflow: hidden;
    min-width: 100%;
    margin-bottom: 1rem;

    &:hover .product__image {
      transform: scale(1.3);
    }
  }

  .product__image {
    width: 100%;
    height: 10rem;
    transition: all 0.3s;
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
`;

export const ProductImage = styled.img`
  max-width: 100%;
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
