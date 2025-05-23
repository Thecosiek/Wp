module.exports = {
    content: ["./*.html", "./*.scss"], // Przeszukuje wszystkie pliki HTML i SCSS w folderze
    theme: {
      extend: {},
    },
    plugins: {
        tailwindcss: {},
        autoprefixer: {},
        ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {})
      }
  }
  