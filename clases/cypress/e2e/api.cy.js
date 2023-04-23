/// <reference types="cypress" />
chai.use(require("chai-sorted"));

describe('API TESTING', () => {

    it("Consulta basica utilizando request", () => {
        cy.request('http://localhost:3000/posts/').then(respuesta => {
            cy.log(respuesta);
            expect(respuesta.body[0].id).to.be.equal(1);
            expect(respuesta.status).to.be.equal(200);
        })
    })

    it("Consulta basica utilizando request pasando un objeto", () => {
        cy.request({
            url: "http://localhost:3000/posts/?",
            method: 'GET',
        }).then(respuesta => {
            cy.log(respuesta);
            expect(respuesta.body[0].id).to.be.equal(1);
            expect(respuesta.status).to.be.equal(200);
        })
    })

    it("Consulta basica utilizando request agregando parametros", () => {
        cy.request({
            url: "http://localhost:3000/posts/?",
            method: 'GET',
            qs: {
                id: '1'
            }
        }).then(respuesta => {
            cy.log(respuesta);
            expect(respuesta.body[0].id).to.be.equal(1);
            expect(respuesta.status).to.be.equal(200);
        })
    })

    it("Consulta basica utilizando request ordenando de forma descendente", () => {
        cy.request({
            url: "http://localhost:3000/posts/?",
            method: 'GET',
            qs: {
                _sort: 'id',
                _order: 'desc'
            }
        }).then(respuesta => {
            cy.log(respuesta);
            expect(respuesta.body).to.be.descendingBy("id")
            expect(respuesta.status).to.be.equal(200);
        })
    })

    it("Consulta basica utilizando request con slices", () => {
        cy.request({
            url: "http://localhost:3000/posts/?",
            method: 'GET',
            qs:{
                _start: '5',
                _end: '11'
            }
        }).then(respuesta => {
            cy.log(respuesta);
            expect(respuesta.status).to.be.equal(200);
        })
    })

    it("Consulta basica utilizando request con rangos", () => {
        cy.request({
            url: "http://localhost:3000/posts/?",
            method: 'GET',
            qs: {
                id_gte: '5',
                id_lte: '11'
            }
        }).then(respuesta => {
            cy.log(respuesta);
            expect(respuesta.status).to.be.equal(200);
        })
    })

    it("Consulta basica utilizando request excluyendo documentos", () => {
        cy.request({
            url: "http://localhost:3000/posts/?",
            method: 'GET',
            qs: {
                id_ne: ['5', '11'],
            }
        }).then(respuesta => {
            cy.log(respuesta);
            expect(respuesta.status).to.be.equal(200);
        })
    })

    it("Primera peticion post", () => {
        const numero = Math.floor(Math.random() * 1000)
        const bodyRquest = {
            id: id,
            title: `titulo ${numero}`,
            author: 'pushingit'
        }
        cy.request({
            url: 'http://localhost:3000/posts/',
            method: "POST",
            body: bodyRquest
        }).then(respuesta => {
            expect(respuesta.status).to.be.equal(201)
            expect(respuesta.body.id).to.be.equal(numero)
            expect(respuesta.body).to.be.eql(
                bodyRquest
                )
            expect(respuesta.body).to.have.keys('id', 'title', 'author')
        })
    })

    it('Deberia modificar un documento utilizando put', () => {
        const numero = Math.floor(Math.random() * 1000)
        const bodyRquest = {
            id: numero,
            title: `titulo ${numero}`,
            author: 'author'
        }
        cy.request({
            url: `http://localhost:3000/posts/5`,
            method: 'PUT',
            body: bodyRquest
        }).then(respuesta => {
            expect(respuesta.status).to.be.equal(200)
            expect(respuesta.body.author).to.be.equal('author')
        })
    })

    it('Deberia eliminar un documento utilizando delete', () => {
        cy.request({
            url: `http://localhost:3000/posts/6`,
            method: 'DELETE',
        }).then(respuesta => {
            expect(respuesta.status).to.be.equal(200)
        })

        cy.request('http://localhost:3000/posts').then(respuesta =>{
            cy.log(respuesta)
        })
    })

    it('Deberia ingresar a la aplicacion seteando los tokens correspondientes', () =>{
        cy.request({
            url: 'https://pushing-it.onrender.com/api/login',
            method: 'POST',
            body:{
                username: 'pushingit',
                password: '123456!'
            }
        }).then(respuesta => {
            expect(respuesta.status).to.be.equal(200)
            window.localStorage.setItem('token', respuesta.body.token)
            window.localStorage.setItem('user', respuesta.body.user.username)
        })

        cy.visit('')
    })
})