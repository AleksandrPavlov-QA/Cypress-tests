
describe('Тестирование staya', function () {
    
    it('Тест формы авторизации', function () {
        cy.visit('https://staya.dog/');
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form > form > [type="email"]').type('snowrunner7@gmail.com');
        cy.get('.auth-form > form > [type="password"]').type('1111111');
        cy.get('.auth-form__submit > .s-button__content').click();
        cy.contains('Невозможно войти с предоставленными учетными данными');
        cy.end();
         })
})