
describe('Тестирование staya', function () {
    
    it('Тест формы авторизации', function () {
        cy.visit('https://staya.dog/');
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form > form > [type="email"]').type('snowrunner7@gmail.com');
        cy.get('.auth-form > form > [type="password"]').type('UF7rWxZkQ');
        cy.get('.auth-form__submit > .s-button__content').click();
        cy.contains('Мои заказы');
        cy.end();
         })
})
