describe('Login Valid dengan Username dan Password', () => {
    beforeEach(() => {
      // Buka halaman login sebelum setiap tes
      cy.visit('http://blogcompany.test/admin/login'); // Ganti URL dengan halaman login aplikasi Anda
    });
  
    it.only('Login berhasil dengan kredensial yang valid', () => {
      // Input username dan password
      cy.get('input[name="email"]').type('admintesting@admin.com');
      cy.get('input[name="password"]').type('password12');
  
      // Klik tombol login
      cy.get('button[type="submit"]').click();
  
      // Verifikasi bahwa login berhasil
      cy.url().should('include', '/dashboard'); // Pastikan redirect ke halaman dashboard
      cy.contains('Selamat, Anda berhasil Login').should('be.visible'); // Pastikan pesan selamat datang muncul
    });

    it('Login tidak berhasil karena username ada yang salah', () => {
        // Input username dan password
        cy.get('input[name="email"]').type('admin@gmail.com');
        cy.get('input[name="password"]').type('password12');

        // klik tombol login
        cy.get('button[type="submit"]').click();

        cy.contains('Email ada yang salah').should('be.visible');
    });
    
    it('Login tidak berhasil karena password ada yang salah', () => {
        // Input username dan password
        cy.get('input[name="email"]').type('admintesting@admin.com');
        cy.get('input[name="password"]').type('password_salah');

        cy.get('button[type="submit"]').click();
        // verify
        cy.contains('password nya ada yang salah').should('be.visible');
    });

    it('Login tidak berhasil karena username dan password salah', () => {
        // Input username dan password
        cy.get('input[name="email"]').type('admin@gmail.com');
        cy.get('input[name="password"]').type('password_salah');

        // klik tombol login
        cy.get('button[type="submit"]').click();

        // verify
        cy.contains('Email ada yang salah').should('be.visible');
    });

    it('Login Invalid Mengosongkan field email dan password', () => {
        // Input username dan password
        cy.get('input[name="email"]').focus().blur();
        cy.get('input[name="password"]').focus().blur();

        // klik tombol login
        cy.get('button[type="submit"]').click();

        // verify
        //cy.contains('Email ada yang salah').should('be.visible');
    });

    it('Login Invalid dengan Mengosongkan field password', () => {
        // Input username dan password

        cy.get('input[name="email"]').type('admintesting@admin.com');
        cy.get('input[name="password"]').focus().blur();

        // klik tombol login
        cy.get('button[type="submit"]').click();

        // verify
        //cy.contains('Email ada yang salah').should('be.visible');
    });

    it('Login Invalid dengan Mengosongkan field email', () => {
        // Input username dan password

        cy.get('input[name="email"]').focus().blur();
        cy.get('input[name="password"]').type('password12');

        // klik tombol login
        cy.get('button[type="submit"]').click();

        // verify
        //cy.contains('Email ada yang salah').should('be.visible');
    });




  });