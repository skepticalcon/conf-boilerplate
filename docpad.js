module.exports = {

  prompts: false,

  // These are variables will be accessible via our templates
  templateData: {

    // Conference info
    conf: {
      name: "SkeptiCal 2014",
      description: "The Northern California conference of science and skepticism. May 31, 2014, Oakland, California.",
      date: "May 31",
      // If your event is free, just comment this line
      price: "$50",
      venue: "Oakland Asian Cultural Center",
      address: "388 9th Street, Oakland, CA",
      city: "Oakland",
      state: "CA"
    },

    // The Call To Action button at the header,
    // If you don't want this, just remove the callToAction property.
    callToAction: {
        text: "Register now!",
        link: "http://skeptical2014.brownpapertickets.com"
    },

    // "Fork me on GitHub", if you don't want this, just remove the forkButton property
/*    forkButton: {
        repository: "http://skeptical2014.brownpapertickets.com/"
    },*/

    // Site info
    site: {
      theme: "skeptical",
      url: "http://www.skepticalcon.com",
      googleanalytics: "UA-28552149-1"
    },

    // Active sections on the website
    // to deactivate comment out with '//'
    // you can also change order here and it will reflect on page
    sections: [
      'about',
      'location',
      'speakers',
      'schedule',
      'sponsors',
      'contact'
    ],

    // Labels which you can translate to other languages
    labels: {
      about: "About",
      location: "Location",
      speakers: "Speakers",
      schedule: "Schedule",
      sponsors: "Sponsors",
      partners: "Partners",
      contact: "Contact"
    },

    // The entire schedule
    schedule: [
      {
        name: "Registration / Exhibitor Tables Open",
        time: "8:30AM-9:00AM"
      },


      {
        name: "Sheril Kirshenbaum",
        photo: "themes/skeptical/img/speakers/kirshenbaum.jpg",
        bio: "Sheril Kirshenbaum works to enhance public understanding of science and improve communication between scientists, policymakers, and the public. She is the Director of The Energy Poll at The University of Texas at Austin and the author of two books, Unscientific America (with Chris Mooney) and The Science of Kissing. Her writing regularly appears in magazines, newspapers, and scientific journals and she has been featured in the Best American Science Writing anthology series. Previously, Sheril worked with the Webber Energy Group and Duke University's Nicholas School of the Environment. She has been a Marshall Memorial Fellow, a Next Generation Project Texas Fellow, and a legislative Knauss Science Fellow on Capitol Hill with Senator Bill Nelson (D-FL) where she was involved in energy, climate, and ocean policy.",
        company: "University of Texas at Austin",
        presentation: {
          title: "Science Literacy in the 21st Century",
          time: "9:00AM-10:00AM",
          description: "",
        }
      },

    {
        name: "Patrick O'Reilly",
        photo: "themes/skeptical/img/speakers/oreilly.jpg",
        bio: "Patrick O'Reilly is a clinical psychologist and an assistant clinical professor of psychiatry at the University of California, San Francisco School of Medicine. He is Past President of the San Francisco Psychological Association and former Chair of Bay Area Skeptics.",
        company: "University of California, San Francisco School of Medicine",
        presentation: {
          title: "Cons, Scams and Undue Influence",
          description: "Internet Scams,  Ponzi schemes, real estate rip-offs, weird cults, fortune-telling cons – it’s hard to read the news without finding another successful con artist at work. As the number of scams and victims grows, the term “undue influence” is gaining widespread use. Dr. O’Reilly will explain the vulnerabilities that these scammers look for and techniques they use to steal from us.",
          time: "10:10AM-11:10AM",
          track: "Breakout 1",
        }
      },
      

      {
        name: "Dan Dugan",
        photo: "themes/skeptical/img/speakers/dugan.jpg",
        bio: "Dan Dugan is well-known in audio engineering as the inventor of the automatic microphone mixer. His patented equipment is used on many popular television productions including PBS News Hour, the presidential debates, and ESPN sports. In addition to engineering, Dan has a lively interest in philosophy, particularly skepticism, the philosophy of science, and current controversies about scientific paradigms and alternative medicine. He is the Secretary of PLANS (People for Legal and Nonsectarian Schools, Inc.), a whistle-blowing organization opposing taxpayer funding of Waldorf education.",
        company: "People for Legal and Nonsectarian Schools, Inc.",
        presentation: {
          title: "Thirteen Years to Failure: A Federal Lawsuit to Stop Public Funding of Cult-Like Waldorf Schools",
          description: "In 1996, the opening of the Internet to the general population brought together a diverse  group of former Waldorf school parents, teachers, and board members who all had experiences with Anthroposophy, the world-wide organization behind Waldorf schools. At the same time, Waldorf schools began to receive public funding as magnet and charter schools. PLANS was incorporated as a non-profit that could bring legal action against perceived violations of the Establishment Clause of the U.S. Constitution, which forbids public funding of religious activities. A lawsuit was filed in federal court against two California school districts. First Amendment lawsuits take many years, and this was no exception. Despite three favorable rulings from the 9th Circuit Court of Appeals over the years, the case was dismissed in 2012 after the appeals court opined that there was no significant evidence left. The dismissal was without prejudice, however, and the way was left open to start all over again.",
          time: "10:10AM-11:10AM",
          track: "Breakout 2",
        }
      },

      {
        name: "Short Break",
        title: "Please visit the exhibitor's tables!",
        time: "11:10AM-11:30AM",
      },

      {
        name: "Ben Santer",
        photo: "themes/skeptical/img/speakers/santer.jpg",
        bio: "Ben Santer, Ph.D, is an atmospheric scientist at Lawrence Livermore National Laboratory (LLNL). His research focuses on such topics as climate model evaluation, the use of statistical methods in climate science, and the identification of natural and  human “fingerprints” in observed climate records. Santer’s early research on the climatic  effects of combined changes in greenhouse gases and sulfate aerosols contributed  to the historic “discernible human influence” conclusion of the 1995 Report by the Intergovernmental Panel on Climate Change (IPCC). His recent work has attempted to identify human fingerprints in a number of different climate variables, such as tropopause height, atmospheric water vapor, the temperature of the stratosphere and troposphere, ocean heat content, and ocean surface temperatures in hurricane formation regions.",
        company: "Lawrence Livermore National Laboratory",
        presentation: {
          title: "A Discernible Human Influence on Global Climate",
          time: "11:30AM-12:30PM",
          description: "Human-caused climate change is not a hypothetical future event. It is real, and we are experiencing it in our lifetimes. Despite the compelling evidence of human effects on global climate, there is a continuing need for scientists to answer the question “How do we know it’s us?” The first part of my talk will briefly summarize the scientific underpinning for “discernible human influence” conclusions of the Intergovernmental Panel on Climate Change (IPCC) and the U.S. National Academy of Sciences (NAS). The focus will be on so-called “fingerprint” studies. Such studies use complex computer models of the climate system to understand how geographical patterns of temperature and moisture (and many other climatic variables) may change in response to human influences. Fingerprinting involves searching for model-predicted \"human influence\" patterns in observational climate records. The message from this body of research is that observed changes in many different (and independently-measured) aspects of the climate system cannot be explained by natural causes alone."
        }
      },

      {
        name: "Lunch Break",
        time: "12:30PM-2:00PM"
      },


      {
        name: "Andrew Fraknoi",
        photo: "themes/skeptical/img/speakers/fraknoi.jpg",
        bio: "Andrew Fraknoi is the Chair of the Astronomy Department at Foothill College (where he teaches courses on astronomy and physics for poets to 900 students per year) and the former Executive Director of the Astronomical Society of the Pacific.  In 2007, he was selected as the California Professor of the Year by the Carnegie Endowment for Higher Education and won the Gemant Prize of the American Institute of Physics for a lifetime of contributions to combining physics and culture. He is a Fellow of the Committee for Skeptical Inquiry, specializing in debunking pseudoscience connected with astronomy. Fraknoi is the lead author of a college astronomy textbook, Voyages Through the Universe, and wrote a book for children, Disney’s Wonderful World of Space. He appears regularly on local and national radio explaining scientific developments in everyday language. The International Astronomical Union has named asteroid 4859 Asteroid Fraknoi in recognition of his contributions to the public understanding of astronomy.",
        company: "Foothill College",
        presentation: {
          title: "Nancy Reagan’s Astrologer, Jetology, and the Zoodiac: An Astronomer Looks at Astrology",
          time: "2:00PM-3:00PM",
          description: "This light-hearted talk explores the popularity of the “fiction science” called astrology, examines its origins thousands of years ago, and then presents some of the many scientific tests that astrology has failed in our time. We’ll take a quick look at how an astrologer came to have influence in the Reagan White House.   And we’ll also discuss a “competing” theory called “jetology” where the position of all the jumbo jets at the moment of your birth can help illuminate your destiny and love life."
        }
      },


      {
        name: "Frank Mosher",
        photo: "themes/skeptical/img/speakers/mosher.jpg",
        bio: "Frank Mosher works as a Mad Scientist for Mad Science of Sacramento Valley. He teaches hands-on science enrichment in schools and for organizations throughout Sacramento and the surrounding areas, both in the classroom and after-school, as well as designing and implementing science summer camps. Frank also serves as the President for the Sacramento Area Skeptics.",
        company: "Mad Science of Sacramento Valley",
        presentation: {
          title: "Kids, Science, and Skepticism... For Adults!",
          time: "3:10PM-4:10PM",
          track: "Breakout 1",
          description: "Our children are our future... future voters, future consumers, future politicians, future adults. Our best hope for the future is to raise a generation of critical thinkers, a generation of people who understand why science works, and why we should care about what science has to tell us. So how do we do this? How do we show children how exciting science is, how powerful of a tool critical thinking is? In this hour we will learn some tools and techniques for getting kids excited about learning science and being skeptical."
        }
      },


      {
        name: "Sheldon W. Helms",
        photo: "themes/skeptical/img/speakers/helms.jpg",
        bio: "Sheldon W. Helms is an associate professor of psychology at Ohlone College in Fremont, CA.  He serves on the Board of Directors for the Bay Area Skeptics, is a member of the SkeptiCal planning committee, and is the founder of the Ohlone Psychology Club Speaker Series through which he regularly hosts top name speakers in science and skepticism.",
        company: "Ohlone College, Fremont, California",
        presentation: {
          title: "Psychological Pseudoscience",
          description: "As doctors battle homeopathy and anti-vaccine myths, anthropologists counter creationist claims, and dietitians deal with the unwarranted battle against gluten and GMOs, much of the skeptical community is oddly silent on dubious claims from fringe psychology. In this talk, psychology professor Sheldon W. Helms will discuss unsupported and sometimes dangerously pseudo-scientific claims from the field of psychology, giving a brief history and explanation of each practice or theory, and demonstrating how a simple application of the scientific method reveals its flaws.",
         time: "3:10PM-4:10PM",
         track: "Breakout 2",
        }
      },

      {
        name: "Short Break",
        title: "Please visit the exhibitor's tables!",
        time: "4:10PM-4:30PM",
      },

      {
        name: "Paul Doherty",
        photo: "themes/skeptical/img/speakers/doherty.jpg",
        bio: "Paul Doherty is a Senior Staff Scientist and Director of the Teacher Institute at the Exploratorium where his main job is helping high school science teachers make science relevant, interesting, correct and fun.",
        company: "San Francisco Exploratorium",

        presentation: {
          title: "The Boundaries of Science",
          description: "If you plot every object we know in the universe on a graph of mass versus radius all of the objects appear within a triangle of three lines: the event horizon of a black hole, the radius of the visible universe and the compton wavelength. Inside this triangle we can do experimental science. Outside of this triangle we can theorize but cannot test our theories. Scientists always push on the boundaries and as we make progress pushing experiments into new realms we expand the boundaries of science.",
          time: "4:30PM-5:30PM"
        }
      },


      {
        name: "Norm Goldblatt",
        photo: "themes/skeptical/img/speakers/goldblatt.jpg",
        bio: "Norm Goldblatt performs his science comedy all over the San Francisco Bay Area: at nightclubs, comedy clubs, corporate events, private parties, and fundraisers. His humor touches on technology, science, politics, and the human condition. His quips were quoted regularly by the late great Herb Caen in the San Francisco Chronicle, and his jokes were heard on the Tonight Show with Jay Leno.",
        company: "",
        presentation: {
          title: "Science Comedy",
          time: "5:30PM-6:00PM"
        }
      },


 /*     {
        name: "Coffee-break",
        time: "15h00"
      },*/



    ],
    // List of Sponsors
    sponsors: [
      {
        name: "Atheist Advocates of San Francisco",
        description: "East Bay Atheists & Atheist Advocates of San Francisco work closely together for the advancement of critical thinking in all spheres of knowledge, especially through political activism.",
        url: "http://atheistadvocatesofsanfrancisco.com/index.html"
      },

      {
        name: "Bay Area Humanists",
        description: "The purpose of the Bay Area Humanists is to promote humanism: an ethical, democratic, naturalistic lifestance that prioritizes reason, scientific and critical thinking, and a system of humanist ethics and secular values as a rational alternative to those based on religion.",
        url: "http://sfhumanists.org"
      },

      {
        name: "The Bone Room",
        description: "The Bone Room is a Natural History Store with real bones, insects and fossils - like a museum, but you can take the exhibits home!",
        url: "https://www.boneroom.com/welcome.aspx"
      },
      {
        name: "Camp Quest",
        description: "A weeklong summer camp program for children ages 8-17, from non-religious families, to experience the awe and wonder of science and the great outdoors while learning about leadership and building lifelong friendships.",
        url: "http://www.campquest.org/"
      },
      {
        name: "CFI-SF/IIG-SFBA",
        description: "The Center for Inquiry SF (CFI-SF) is a local branch of Center for Inquiry whose mission is promotion of a society based on science, reason, freedom of inquiry and secular values. The Independent Investigations Group SF Bay Area administers a $100,000 prize for anyone who can demonstrate a paranormal ability under controlled conditions. (So far, no one has).",
        url: "http://www.centerforinquiry.net/sf"
      },
      { 
        name: "East Bay Atheists",
        description: "East Bay Atheists & Atheist Advocates of San Francisco work closely together for the advancement of critical thinking in all spheres of knowledge, especially through political activism.",
        url: "http://eastbayatheists.org"
      },
      
      {
        name: "East Bay Skeptics Society",
        description: "The East Bay Skeptics Society is a local non-profit, member-governed organization dedicated to the advancement of reason, science and intellectual integrity -- and to the exposure of superstition, fraud and pseudoscience.",
        url: "https://groups.google.com/forum/#!forum/eb-skeptics"
      },
      {
        name: "National Center for Science Education",
        description: "Defending and promoting the teaching of evolution and climate science.",
        url: "http://ncse.com/"
      },
      {
        name: "Reason4Reason",
        description: "Reason4Reason is a group of rational thinking activists in the San Francisco Bay Area working to grow the modern skeptical movement and hamper northern California pseudoscience from exporting irrational thinking around the world.",
        url: "http://reason4reason.org/Joomlatest/"
      },
      {
        name: "Secular Coalition for California",
        description: "The Secular Coalition for California is a state chapter of the Secular Coalition for America, a 501(c)(4) political advocacy organization whose purpose is to amplify the diverse and growing voice of the nontheistic community in the United States.",
        url: "http://states.secular.org/states/california"
      },

      {
        name: "Secularity Clothing",
        description: "Secularity Clothing is an independent clothing brand from the Bay Area that focuses on promoting secular values, eco-friendlyness, and compassionate living with simple designs on organic material.",
        url: "http://secularityclothing.com/about/"
      },

      {
        name: "The SETI Institute",
        description: "The SETI Institute is a private, nonprofit organization dedicated to scientific research, education, and public outreach on the origin, nature, and prevalence of life in the universe.",
        url: "http://www.seti.org/"
      },

      {
        name: "Sunday Assembly East Bay",
        description: "The Sunday Assembly is a godless congregation that celebrates life and that embraces the motto: \"Live better, help often, wonder more.\"",
        url: "http://eastbay.sundayassembly.com/"
      },

      {
        name: "Sunday Assembly Silicon Valley ",
        description: "The Sunday Assembly is a godless congregation that celebrates life and that embraces the motto: \"Live better, help often, wonder more.\"",
        url: "http://sundayassemblysv.org/"
      },


      {
        name: "University of California Observatories - Lick Observatory",
        description: "The Lick Observatory is a Multi-campus Research Unit of the University of California, providing UC astronomers with a state-of-the-art astronomical research and education facility.",
        url: "http://www.ucolick.org"
      },

      {
        name: "Wonderfest, the Bay Area Beacon of Science",
        description: "Through in-person and online presentations, Wonderfest aspires to stimulate curiosity, promote careful reasoning, challenge unexamined beliefs, and encourage life-long learning.",
        url: "http://wonderfest.org"
      },
    ],

    // List of Partners
    partners: [
      {
        name: "BrazilJS",
        logo: "themes/yellow-swan/img/partner.png",
        url: "http://braziljs.org"
      }
    ],

    // Theme path
    getTheme: function() {
      return "themes/" + this.site.theme;
    }
  }
};