describe('login page ', () => {
    beforeEach(() => {
        cy.visit('/login')
    })
    describe('Validation', () => {
        it('should show validation error for empty fields', () => {
            cy.contains('Login').click()
            cy.contains('validation error')
        })
    })

    describe('role based routing', () => {
        it('should login as admin and redirect to /admin', () => {
            // admin test
            cy.get('[formcontrolname="email"]').type('admin123@gmail.com')
            cy.get('[formcontrolname="password"]').type('admin123')

        })
        it('should login as user and redirect to /user', () => {
            //user test ?
        })
    })

})