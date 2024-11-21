## Ringkasan

`it.skip` : Untuk melewati satu tes.
`describe.skip`: Untuk melewati satu suite atau grup tes.
Logika Kondisional: Melewati tes berdasarkan kondisi tertentu (misalnya variabel lingkungan).
`it.only` atau `describe.only`: Menjalankan tes tertentu dan melewati yang lain.

# verify pesan dengan text

cy.contains('nama-text).should(be.visible)

# Verifikasi Elemen

cy.get('id-atau-kelas').should('be.visible')

# verifikasi selain menggunakan be.visible

should('exits) -> Memastikan elemen ada di DOM, tetapi tidak memverifikasi apakah elemen tersebut terlihat
note -> Elemen yang tersembunyi (display: none) tetap lulus dengan assertion ini.

# Verifikasi elemen yang tidak terlihat

note -> Memastikan elemen tidak terlihat di layar. Biasanya digunakan untuk memverifikasi bahwa modal atau pesan tertentu telah ditutup.
cy.get('id-atau-kelas').should('not.be.visible')

# catatan penting

- implicit wait : cypress secara otomatis nunggu element hingga assertion terpenuhi selama 4 detik (default), tidak perlu menambahkan cy.wait() kecuali betul2 di perlukan

- Assertion Berantai: Anda dapat menggabungkan beberapa assertion, seperti:
  contoh : cy.get('.modal')
  .should('exist')
  .and('be.visible');
