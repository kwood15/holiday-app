import React from "react";
import { shallow, mount } from "enzyme";
import ImageGallery from "react-image-gallery";
import ProductDetailView from "../ProductDetailView";

describe("<ProductDetailView /> component", () => {
  const props = {
    match: {
      params: {}
    }
  };

  describe("A successful request to the api", () => {
    fetch.resetMocks();
    fetch.mockResponseOnce(
      JSON.stringify({
        Title: "",
        Description: "",
        InStock: true,
        AvailableSizes: [
          {
            DisplayName: "",
            Currency: "£",
            Price: 12
          },
          {
            DisplayName: "",
            Currency: "£",
            Price: 8
          }
        ],
        ImageUrls: [
          {
            ImageNo: 1,
            ImageUrl: ""
          }
        ]
      })
    );

    const wrapper = mount(<ProductDetailView {...props} />);

    wrapper.setState({
      product: {
        AvailableSizes: [
          {
            DisplayName: "",
            Currency: "£",
            Price: 12
          },
          {
            DisplayName: "",
            Currency: "£",
            Price: 8
          }
        ],
        ImageUrls: [
          {
            ImageNo: 1,
            ImageUrl: ""
          }
        ]
      },
      selectedSpecification: "",
      error: null
    });

    it("should make a call to the api", () => {
      expect(fetch.mock.calls.length).toEqual(1);
    });

    it("should render a <ProductDetailView /> component", () => {
      expect(wrapper).toHaveLength(1);
    });

    it("should render an <ImageGallery /> component that passes through an {items} prop that receives 2 urls", () => {
      expect(wrapper.find(ImageGallery).prop("items")).toEqual([
        {
          original: "",
          thumbnail: ""
        }
      ]);
    });

    it("should display a product title as a <h1></h1> tag", () => {
      expect(wrapper.find(".product-description__title").type()).toEqual("h1");
      expect(wrapper.find(".product-description__title").text()).toEqual("");
    });

    it("should call a function passing in the unformatted HTML string of the product description", () => {
      const unFormattedDescription = "";
      const formatMarkup = jest.fn();
      const result = formatMarkup(unFormattedDescription);

      expect(result).toBeUndefined();
      expect(formatMarkup).toHaveBeenCalledTimes(1);
      expect(formatMarkup).toHaveBeenCalledWith(unFormattedDescription);
    });

    it("should return the result of the function call with a formatted HTML string for the product description", () => {
      const unFormattedDescription = "";
      const formattedDescription = "";

      const formatMarkup = jest
        .fn()
        .mockImplementationOnce(() => formattedDescription);
      expect(formatMarkup(unFormattedDescription)).toBe(formattedDescription);
      expect(formatMarkup).toHaveBeenCalledWith(unFormattedDescription);
    });

    it("should display the product stock availabilty", () => {
      expect(wrapper.find(".product-description__stock-status").html()).toEqual(
        '<p class="product-description__stock-status">Product Availability: <strong>In Stock</strong></p>'
      );
    });

    it("should display the product currency and price", () => {
      expect(
        wrapper
          .find(".product-specification__price")
          .at(0)
          .html()
      ).toEqual('<span class="product-specification__price">£12</span>');
    });

    it("should call `preventDefault()` and an `alert()` without a radio button value when the form is submitted", () => {
      const event = { preventDefault: () => {} };
      window.alert = jest.fn();
      jest.spyOn(event, "preventDefault");

      wrapper.find("form").simulate("submit", event);
      expect(event.preventDefault).toHaveBeenCalledTimes(1);
      expect(window.alert).toHaveBeenCalledTimes(1);
      expect(window.alert).toHaveBeenCalledWith(
        "You must select a specification"
      );
    });

    it("should set the state when a radio button is selected", () => {
      wrapper
        .find('input[type="radio"]')
        .at(0)
        .simulate("change", { target: { value: "selected radio button" } });
      expect(wrapper.state("selectedSpecification")).toBe(
        "selected radio button"
      );
    });

    it("should call `preventDefault()` and an `alert()` with the selected radio button value when the form is submitted", () => {
      const event = { preventDefault: () => {} };
      window.alert = jest.fn();
      jest.spyOn(event, "preventDefault");

      wrapper.find("form").simulate("submit", event);
      expect(event.preventDefault).toHaveBeenCalledTimes(1);
      expect(window.alert).toHaveBeenCalledTimes(1);
      expect(window.alert).toHaveBeenCalledWith(
        "Chosen spec: selected radio button submitted"
      );
    });
  });

  describe("A failed response from the api", () => {
    fetch.resetMocks();
    fetch.mockRejectOnce(new Error("Error has been thrown"));

    const wrapper = shallow(<ProductDetailView {...props} />);

    it("should make a call to the api", () => {
      expect(fetch.mock.calls.length).toEqual(1);
    });

    it("should not render any product details", () => {
      expect(wrapper.find(".product-detail")).toHaveLength(0);
    });

    it("should render an error message", () => {
      expect(wrapper.find(".error-message")).toHaveLength(1);
    });
  });
});
