export default defineAppConfig({
  alpine: {
    title: 'Metabloggism',
    description: 'AI engineer and tech adventurer. I love learning so I learned Machine Learning for learning how to make Machines learn, but in my way I learned that I had learned for learning how to make Machines Learn to Learn. You may note my interest in Meta-Learning.',
    image: {
      src: '/social-card-preview.png',
      alt: 'An image showcasing my project.',
      width: 400,
      height: 300
    },
    header: {
      position: '', // possible value are : | 'left' | 'center' | 'right'
      logo: {
        path: '/logo.svg', // path of the logo
        pathDark: '/logo-dark.svg', // path of the logo in dark mode, leave this empty if you want to use the same logo
        alt: 'alpine' // alt of the logo
      }
    },
    footer: {
      credits: {
        // possible value are : true | false
        enabled: true,

        // our github repository
        repository: 'https://github.com/Metabloggism/metabloggism.github.io',

        text: 'Metabloggism'
      },
      navigation: true, // possible value are : true | false
      alignment: '', // possible value are : 'none' | 'left' | 'center' | 'right'
      message: 'Follow me on' // string that will be displayed in the footer (leave empty or delete to disable)
    },
    socials: {
      twitter: '',
      instagram: '',

      linkedin: {
        icon: 'uil:linkedin',
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/company/nuxtlabs'
      },

      github: 'https://github.com/MrLeylo'
    },
    form: {
      successMessage: 'Message sent. Thank you!'
    }
  }
})