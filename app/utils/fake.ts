import { Category, Course, LessonLection, LessonType, LessonVideo, User } from '@/types';

export const user: User = { id: 1 };

export const course: Course = {
  title: 'Python for Newbies',
  short_description: 'Start from here if you want to understand the magic!',
  description: 'Python is a high-level, general-purpose and really interesting programming language. It\'s really easy to read, easy to understand, but still is very powerful for any goals! Just be sure to take a cup of coffee while learning Python :D\n\nHere you will learn every aspect of Python: syntax, variables, functions and other stuff from the very beginning of your path of developer!',
  color: '#F28F3B',
  completed: 4,
  lessons: 12,
  picture: '/lessons/lesson7.svg',
};

export const courseContent: Category[] = [
  {
    id: 0,
    title: 'First step. Basics.',
    lessons: [
      {
        id: 1,
        title: 'Python Syntax',
        description: 'Learn basic syntax',
        type: LessonType.VIDEO,
        completed: false,
      },
      {
        id: 2,
        title: 'Strings, Numbers, Lists',
        description: 'Learn basic types of Python',
        type: LessonType.LECTION,
        completed: false,
      },
      {
        id: 3,
        title: 'Types',
        description: "Let's test your understanding of types",
        type: LessonType.TEST,
        completed: false,
      },
      {
        id: 4,
        title: 'Loops',
        description: 'Loops are structures that let you repeat Python code over and over. Learn how to read loops and write them to solve your own problems.',
        type: LessonType.VIDEO,
        completed: true,
      },
      {
        id: 5,
        title: 'Functions',
        description: 'Learn about code reuse with Python functions. Apply that knowledge to create functions for famous physics formulas.',
        type: LessonType.VIDEO,
        completed: false,
      },
      {
        id: 6,
        title: 'Сonsolidate Knowledge',
        description: "connecting the bus won't do anything, we need to input the haptic SAS feed!",
        type: LessonType.TEST,
        completed: true,
      },
    ],
  },
  {
    id: 1,
    title: 'Second step. Intermediate.',
    lessons: [
      {
        id: 1,
        title: 'Using Modules',
        description: 'Learn how modules work and how you should use them in your code',
        type: LessonType.VIDEO,
        completed: false,
      },
      {
        id: 2,
        title: 'Classes',
        description: 'Python classes provide all the standard features of Object Oriented Programming',
        type: LessonType.VIDEO,
        completed: true,
      },
      {
        id: 3,
        title: 'Files',
        description: "I'll copy the haptic HTTP firewall, that should driver the SSL panel!",
        type: LessonType.LECTION,
        completed: true,
      },
      {
        id: 4,
        title: 'First Code Test',
        description: 'The THX bandwidth is down, navigate the cross-platform array so we can input the XSS firewall!',
        type: LessonType.TEST,
        completed: false,
      },
      {
        id: 5,
        title: 'Second Code Test',
        description: 'Try to generate the SQL bandwidth, maybe it will navigate the online circuit!',
        type: LessonType.TEST,
        completed: false,
      },
      {
        id: 6,
        title: 'Afterword',
        description: 'Use the bluetooth CSS pixel, then you can program the back-end application!',
        type: LessonType.LECTION,
        completed: true,
      },
    ],
  },
];

export const courses: Course[] = [{
  title: 'Python for Newbies',
  short_description: 'Start from here if you want to understand the magic!',
  description: 'Python is a high-level, general-purpose and really interesting programming language. It\'s really easy to read, easy to understand, but still is very powerful for any goals! Just be sure to take a cup of coffee while learning Python :D\n\nHere you will learn every aspect of Python: syntax, variables, functions and other stuff from the very beginning of your path of developer!',
  color: '#F28F3B',
  completed: 4,
  lessons: 12,
  picture: '/lessons/lesson7.svg',
},
{
  title: 'JavaScript for everyone',
  short_description: 'If we bypass the protocol, we can get to the PCI card through the neural ADP transmitter!',
  description: 'aNon modo mihi magis faciem, deos fratres utilibus, luctante coniciunt hospes!Licet ciboque, renasci desierim dixit: lacrimae: sed. A surgimus, pax ministret,lapillo: frustra pro est superi? Miscent reccidimus abstulit casa: aves dumque;hanc et hosti consumpserat etiam?Dum Solem est auras metuenda terque cognovit reddere. Acti abit, ita inde etsuos *Indigetem armatus* sim dextram ordine procul, si neque sub matres aut.Vulnera et salices lugebat, ecce exoratis. Nulla in nunc Semina Aurora; eripis,puellae praeside.A concussit furit citus et omnia. Mei ferant grandiaque ora cum hinc procullongius, naves omen: quid viderat! Intus et caesa sit subtemen comitesque fuit.Sertaque adhuc quoque contemptor et neque mille sonitum et dignamur moveremulcet bisque ante actis ullis sic. Feris Minos, has amicas ruinas Threiciamnatantes coniuge, annum ficti Aglauros ambagum de Hymetti deficiunt quinfalsoque quod.',
  color: '#EF233C',
  completed: 8,
  lessons: 32,
  picture: '/lessons/lesson8.svg',
},
{
  title: 'UI/UX',
  short_description: 'We need to index the solid state SMTP hard drive!',
  description: 'aNon modo mihi magis faciem, deos fratres utilibus, luctante coniciunt hospes!Licet ciboque, renasci desierim dixit: lacrimae: sed. A surgimus, pax ministret,lapillo: frustra pro est superi? Miscent reccidimus abstulit casa: aves dumque;hanc et hosti consumpserat etiam?Dum Solem est auras metuenda terque cognovit reddere. Acti abit, ita inde etsuos *Indigetem armatus* sim dextram ordine procul, si neque sub matres aut.Vulnera et salices lugebat, ecce exoratis. Nulla in nunc Semina Aurora; eripis,puellae praeside.A concussit furit citus et omnia. Mei ferant grandiaque ora cum hinc procullongius, naves omen: quid viderat! Intus et caesa sit subtemen comitesque fuit.Sertaque adhuc quoque contemptor et neque mille sonitum et dignamur moveremulcet bisque ante actis ullis sic. Feris Minos, has amicas ruinas Threiciamnatantes coniuge, annum ficti Aglauros ambagum de Hymetti deficiunt quinfalsoque quod.',
  color: '#000000',
  completed: 5,
  lessons: 16,
  picture: '/lessons/lesson3.svg',
},
{
  title: 'How to sell a pen',
  short_description: 'If we hack the microchip, we can get to the SQL card through the optical IB matrix!',
  description: 'aNon modo mihi magis faciem, deos fratres utilibus, luctante coniciunt hospes!Licet ciboque, renasci desierim dixit: lacrimae: sed. A surgimus, pax ministret,lapillo: frustra pro est superi? Miscent reccidimus abstulit casa: aves dumque;hanc et hosti consumpserat etiam?Dum Solem est auras metuenda terque cognovit reddere. Acti abit, ita inde etsuos *Indigetem armatus* sim dextram ordine procul, si neque sub matres aut.Vulnera et salices lugebat, ecce exoratis. Nulla in nunc Semina Aurora; eripis,puellae praeside.A concussit furit citus et omnia. Mei ferant grandiaque ora cum hinc procullongius, naves omen: quid viderat! Intus et caesa sit subtemen comitesque fuit.Sertaque adhuc quoque contemptor et neque mille sonitum et dignamur moveremulcet bisque ante actis ullis sic. Feris Minos, has amicas ruinas Threiciamnatantes coniuge, annum ficti Aglauros ambagum de Hymetti deficiunt quinfalsoque quod.',
  color: '#f20088',
  completed: 0,
  lessons: 8,
  picture: '/lessons/lesson4.svg',
},
{
  title: 'Cyber Security',
  short_description: 'We need to input the multi-byte SAS pixel!',
  description: 'aNon modo mihi magis faciem, deos fratres utilibus, luctante coniciunt hospes!Licet ciboque, renasci desierim dixit: lacrimae: sed. A surgimus, pax ministret,lapillo: frustra pro est superi? Miscent reccidimus abstulit casa: aves dumque;hanc et hosti consumpserat etiam?Dum Solem est auras metuenda terque cognovit reddere. Acti abit, ita inde etsuos *Indigetem armatus* sim dextram ordine procul, si neque sub matres aut.Vulnera et salices lugebat, ecce exoratis. Nulla in nunc Semina Aurora; eripis,puellae praeside.A concussit furit citus et omnia. Mei ferant grandiaque ora cum hinc procullongius, naves omen: quid viderat! Intus et caesa sit subtemen comitesque fuit.Sertaque adhuc quoque contemptor et neque mille sonitum et dignamur moveremulcet bisque ante actis ullis sic. Feris Minos, has amicas ruinas Threiciamnatantes coniuge, annum ficti Aglauros ambagum de Hymetti deficiunt quinfalsoque quod.',
  color: '#cf75ff',
  completed: 12,
  lessons: 12,
  picture: '/lessons/lesson5.svg',
},
{
  title: 'Linear Algebra for children',
  short_description: "synthesizing the system won't do anything, we need to connect the online PCI transmitter!",
  description: 'aNon modo mihi magis faciem, deos fratres utilibus, luctante coniciunt hospes!Licet ciboque, renasci desierim dixit: lacrimae: sed. A surgimus, pax ministret,lapillo: frustra pro est superi? Miscent reccidimus abstulit casa: aves dumque;hanc et hosti consumpserat etiam?Dum Solem est auras metuenda terque cognovit reddere. Acti abit, ita inde etsuos *Indigetem armatus* sim dextram ordine procul, si neque sub matres aut.Vulnera et salices lugebat, ecce exoratis. Nulla in nunc Semina Aurora; eripis,puellae praeside.A concussit furit citus et omnia. Mei ferant grandiaque ora cum hinc procullongius, naves omen: quid viderat! Intus et caesa sit subtemen comitesque fuit.Sertaque adhuc quoque contemptor et neque mille sonitum et dignamur moveremulcet bisque ante actis ullis sic. Feris Minos, has amicas ruinas Threiciamnatantes coniuge, annum ficti Aglauros ambagum de Hymetti deficiunt quinfalsoque quod.',
  color: '#5FBFF9',
  completed: 7,
  lessons: 14,
  picture: '/lessons/lesson6.svg',
}];

export const videoLesson: LessonVideo = {
  id: 1,
  title: 'Python Syntax',
  description: 'Learn basic syntax.\n\nTry to transmit the JBOD alarm, maybe it will index the back-end sensor! Lorem ipsum dolor,\nsit amet consectetur adipisicing elit.\n\n Cum inventore ab nam! Dolores recusandae officia facilis ad culpa nostrum ducimus molestiae aspernatur, quae autem molestias exercitationem excepturi deserunt perferendis aut? Lorem ipsum dolor, sit amet\n consectetur adipisicing elit. Cum inventore ab nam! Dolores recusandae officia facilis ad culpa nostrum ducimus molestiae aspernatur, quae autem molestias exercitationem excepturi deserunt perferendis aut? Lorem ipsum dolor, sit amet consectetur adipisicing elit.\n\n Cum inventore ab nam! Dolores recusandae officia facilis ad culpa nostrum ducimus molestiae aspernatur, quae autem molestias exercitationem excepturi deserunt perferendis aut?',
  type: LessonType.VIDEO,
  completed: false,
  video: '',
  comments: [
    {
      id: 1,
      user_name: 'You',
      message: 'Hello, I don\'t understand that thing. Can you help?awdawd awipod aiuwj daw',
      date: 1646319740761,
    },
    {
      id: 2,
      user_name: 'Teacher 1',
      message: 'Yep, what did happen?',
      date: 1646319750086,
    },
  ],
  files: [
    {
      id: 1,
      title: 'lection.pdf',
      description: 'Lesson in text format',
      url: '/vercel.svg',
    },
    {
      id: 2,
      title: 'example_code.zip',
      description: 'Example code from lesson',
      url: '/favicon.ico',
    },
    {
      id: 3,
      title: 'generator.py',
      description: 'Generator code from lesson',
      url: '/favicon.ico',
    },
    {
      id: 4,
      title: 'report.pdf',
      description: 'Report of lesson',
      url: '/favicon.ico',
    },
  ],
};

export const lectionLesson: LessonLection = {
  id: 2,
  title: 'Strings, Numbers, Lists',
  description: 'Learn basic types of Python',
  type: LessonType.LECTION,
  completed: false,
  content: `
  ## Prensamque cornua aera cumulusque pallam sanguine dimittite
  
  *Lorem* markdownum annis; degeneras crepuscula bicoloribus erraverit, recurva
  suas: vetat felix equos. Nunc dolore quicquid, ponere pittheam in eundi
  insequitur vitam quaesita ac novi veneratur possit lanas tamen Iuno! Quattuor
  vultumque noster. Aut tamen quoque ad nunc ludit sim *maeonis petis si* frequens
  illis; medioque guttae exspatiemur illic: inde.
  
  > Morte illis viresque illis! Calidis movebo linoque. Refert quam Liber posse
  > trepidare inplet a colit tamen forma.
  
  ## Et viri Pelasgas curam capax
  
  Huic plurima et ergo: cum, semiferos at lumina omnibus bacchae Lethaea
  gravidamve fugerat. Mersurum iuvencam velit, aera dum [frementi
  viventia](http://www.superbumvulneret.net/) ille cunctantem citius. Salutis
  saepe cadunt populisque, quoque enim, **detegeret** scopulis? Patior mihi
  vestem, et opem mixta medullas venerat forma nympharum, Persephones nidor vires.
  Impediebat quoniam remanet ossibus Aonios.

  ![header](/header.jpg)
  
  ## Ales cum
  
  Cur in cupiunt quemque longo videre, illa tamen finite et resonant aurata
  reponere quicquam cum genitor tamen telo fatale! Magna sacras. Venistis Sospite.
  
      key(seo_bit_on, programIrcBasic(driveMainframeSoftware(-4, coreAix,
              kbps_word_bookmark), excel(access_bar, 913156, -5), rw_fifo_server),
              kbpsRoomNtfs * olap_and + -2 + click);
      if (uri) {
          grayscale_multi_ping(3);
      }
      if (mbps) {
          matrix(passiveSocial, lock_start);
          backsideWebSnow = 4;
      } else {
          cell_metal_click /= 3;
          compactDropHardware(bookmark, prebinding, 3 + trash);
          codecE = 3;
      }
      if (uat_host + mp_card / soap) {
          link.dac_bar(upnp, wysiwyg(42455, 4));
          ipod_cdn(vdu(4, clockRgb, windows_infringement_clean));
      }
      dvd_system_token(favicon_file_flops.ram(-4, publishing_version_repeater) +
              1);
  
  ## Successibus tamen est populi ossa nec puerosque
  
  Non modo mihi magis faciem, deos fratres utilibus, luctante coniciunt hospes!
  Licet ciboque, renasci desierim dixit: lacrimae: sed. A surgimus, pax ministret,
  lapillo: frustra pro est superi? Miscent reccidimus abstulit casa: aves dumque;
  hanc et hosti consumpserat etiam?
  
  Dum Solem est auras metuenda terque cognovit reddere. Acti abit, ita inde et
  suos *Indigetem armatus* sim dextram ordine procul, si neque sub matres aut.
  Vulnera et salices lugebat, ecce exoratis. Nulla in nunc Semina Aurora; eripis,
  puellae praeside.
  
  A concussit furit citus et omnia. Mei ferant grandiaque ora cum hinc procul
  longius, naves omen: quid viderat! Intus et caesa sit subtemen comitesque fuit.
  Sertaque adhuc quoque contemptor et neque mille sonitum et dignamur movere
  mulcet bisque ante actis ullis sic. Feris Minos, has amicas ruinas Threiciam
  natantes coniuge, annum ficti Aglauros ambagum de Hymetti deficiunt quin
  falsoque quod.`,
  files: [
    {
      id: 1,
      title: 'lection.pdf',
      description: 'Lection as text file',
      url: '/vercel.svg',
    },
  ],
};
