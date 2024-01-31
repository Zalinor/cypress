

// 1 Вход на сайт
describe('Login', () => {
 

  it('test', () => {
    // заходим на сайт
    cy.visit('https://www.saucedemo.com')
    // Вводим логин и пароль
    // cy.get("#user-name").should('be.visible').type('standard_user')
    cy.get('input[name="user-name"]').should('be.visible').type('standard_user')
    cy.get('input[name="password"]').should('be.visible').type('secret_sauce')  
    // кликаем на кнопку входа
    cy.get('#login-button').click()
  })
})

// 2 Добавление и удаление товаров из корзины
describe('Add_delete', () => {

  it('test', () => {
  // Заходим на страницу сайта вводим логин и пароль затем подтверждаем
    cy.visit('https://www.saucedemo.com')
    cy.get('input[name="user-name"]').should('be.visible').type('standard_user')
    cy.get('input[name="password"]').should('be.visible').type('secret_sauce') 
    cy.get('#login-button').click()
    // Добавляем товары в корзину
    cy.get('#add-to-cart-sauce-labs-backpack').click()
    cy.get('#add-to-cart-sauce-labs-onesie').click()
    cy.get('#add-to-cart-sauce-labs-fleece-jacket').click()
    // Заходим в корзину
    cy.get('.shopping_cart_link').click()
    // Удаляем Sauce Labs Fleece Jacket и выходим на страницу товаров
    cy.get('#remove-sauce-labs-fleece-jacket').click()
    cy.get('#continue-shopping').click()
  })

})

// 3 Добавление товаров в корзину, удаление и подтверждение заказа
describe('Confirm_order', () => {

  it('test', () => {
  // Заходим на страницу сайта вводим логин и пароль затем подтверждаем
    cy.visit('https://www.saucedemo.com')
    cy.get('input[name="user-name"]').should('be.visible').type('standard_user')
    cy.get('input[name="password"]').should('be.visible').type('secret_sauce') 
    cy.get('#login-button').click()

  // добляем товар заходим в корзину и удаляем его затем жмем checkout
    cy.get('#add-to-cart-sauce-labs-backpack').click()
    cy.get('.shopping_cart_link').click()
    cy.get('#remove-sauce-labs-backpack').click()
    cy.get('#checkout').click()
  // Заполняем поля жмем продолжить и финиш
  cy.get('#first-name').type('Zlnr')
  cy.get('#last-name').type('Drmr')
  cy.get('#postal-code').type('234')
  cy.get('#continue').click()
  cy.get('#finish').click()
  
  })

})

// 4 Проверка наличия больше 4 товаров на странице и проверка сохранения товара в корзине при повторном входе в профиль


describe('Logout_item_in_cart_check', () => {

  it('test', () => {
  // Заходим на страницу сайта вводим логин и пароль затем подтверждаем
    cy.visit('https://www.saucedemo.com')
    cy.get('input[name="user-name"]').should('be.visible').type('standard_user')
    cy.get('input[name="password"]').should('be.visible').type('secret_sauce') 
    cy.get('#login-button').click()

  // Добавляем товар в корзину и выходим из аккаунта
    cy.get('#add-to-cart-sauce-labs-bike-light').click()
    cy.get('#react-burger-menu-btn').click()
    cy.get('#logout_sidebar_link').click()
    // Повторно заходим в аккаунт и проверяем товар в корзине
    cy.get('input[name="user-name"]').should('be.visible').type('standard_user')
    cy.get('input[name="password"]').should('be.visible').type('secret_sauce') 
    cy.get('#login-button').click()

    cy.get('.shopping_cart_link').click()
    cy.get('.inventory_item_name').contains('Sauce Labs Bike Light')

  })

})

// 5 Проверка работы карточки товара

describe('Item_check', () => {

  it('test', () => {
  // Заходим на страницу сайта вводим логин и пароль затем подтверждаем
    cy.visit('https://www.saucedemo.com')
    cy.get('input[name="user-name"]').should('be.visible').type('standard_user')
    cy.get('input[name="password"]').should('be.visible').type('secret_sauce') 
    cy.get('#login-button').click()
    
    // Проверяем существуют ли товары впринципе
    cy.get('.inventory_item_name').should('exist');
    cy.get('.inventory_item_name').then($items => {

      // Генерируем случайный индекс, чтобы выбрать случайную карточку товара
      const randomIndex = Math.floor(Math.random() * $items.length);
      
      // Находим случайную карточку товара по индексу и кликаем на нее
      cy.wrap($items).eq(randomIndex).click();
    });

    // добавляем в корзину
    cy.get('.btn_inventory').contains('Add to cart').click()
  })

})

  // 6 Проверка кликабельности сайта

describe('Click_test', () => {

  it('test', () => {
  // Заходим на страницу сайта вводим логин и пароль затем подтверждаем
    cy.visit('https://www.saucedemo.com')
    cy.get('input[name="user-name"]').should('be.visible').type('standard_user')
    cy.get('input[name="password"]').should('be.visible').type('secret_sauce') 
    cy.get('#login-button').click()
    cy.get('#react-burger-menu-btn').click()
    cy.get('#react-burger-cross-btn').click()
    cy.get('.shopping_cart_link').click()
    cy.get('#checkout').click()
    cy.get('#continue').click()
    cy.get('#cancel').click()
    cy.get('#continue-shopping').click()
    cy.get('#add-to-cart-sauce-labs-backpack').click()
    cy.get('#remove-sauce-labs-backpack').click()
    cy.get('.product_sort_container').select('hilo')
    cy.get('#react-burger-menu-btn').click()
    cy.get('#logout_sidebar_link').click()
  })
  
})  