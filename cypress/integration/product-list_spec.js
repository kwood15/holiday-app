describe("Product List", () => {
  it("should display a `home` link and go the the url when clicked", () => {
    cy.visit("http://localhost:3000/");
    cy.contains("Home").click();
  });

  it("should display a `holiday` link and go the the url when clicked", () => {
    cy.contains("Holiday").click();
    cy.url().should("eq", "http://localhost:3000/holidays");
  });

  it("should load a product modal when a product item is clicked", () => {
    cy.get(".product__link")
      .first()
      .click();
    cy.url().should("eq", "http://localhost:3000/holidays");
  });

  it("should focus the close modal button when the modal is open", () => {
    cy.get(".modal__close")
      .first()
      .focus();
  });

  it("should close the modal when the close button is clicked", () => {
    cy.get(".modal__close")
      .first()
      .click();
  });
});
