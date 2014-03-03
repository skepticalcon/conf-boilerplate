module.exports = {

  prompts: false,

  // These are variables will be accessible via our templates
  templateData: {

    // Conference info
    conf: {
      name: "SkeptiCal 2014",
      description: "The Northern California conference of science and skepticism.",
      date: "May 31",
      // If your event is free, just comment this line
      price: "$40",
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
        repository: "https://github.com/braziljs/conf-boilerplate"
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
//      'schedule',
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
//      {
//        name: "Check-in / Breakfast",
//        time: "9h00"
//      },
      {
        name: "Sheldon Helms",
        photo: "themes/skeptical/img/speakers/helms.jpg",
        bio: "Sheldon W. Helms is an associate professor of psychology at Ohlone College in Fremont, CA.  He serves on the Board of Directors for the Bay Area Skeptics, is a member of the SkeptiCal planning committee, and is the founder of the Ohlone Psychology Club Speaker Series through which he regularly hosts top name speakers in science and skepticism.",
        company: "Ohlone College, Fremont, California",
        presentation: {
          title: "Psychological Pseudoscience",
          description: "As doctors battle homeopathy and anti-vaccine myths, anthropologists counter creationist claims, and dietitians deal with the unwarranted battle against gluten and GMOs, much of the skeptical community is oddly silent on dubious claims from fringe psychology. In this talk, psychology professor Sheldon W. Helms will discuss unsupported and sometimes dangerously pseudo-scientific claims from the field of psychology, giving a brief history and explanation of each practice or theory, and demonstrating how a simple application of the scientific method reveals its flaws.",
 //         time: "10h00"
        }
      },
      {
        name: "Brian Dunning",
        photo: "themes/skeptical/img/speakers/dunning.png",
        bio: "Science writer Brian Dunning is the host and producer of the podcast Skeptoid: Critical Analysis of Pop Phenomena (skeptoid.com), applying critical thinking to urban legends and popular pseudoscientific subjects promoted by the mass media. He is the author of five books based on the podcast. His background is in computer science and he is a member of the National Association of Science Writers.",
        company: "Skeptoid Media",

        presentation: {
          title: "Pseudohistory Hurts!",
          description: "In this hour we'll take a dozen cases of false pseudohistory that are commonly believed or promoted through popular media, and study why they are harmful to society. More importantly, we'll discover the true benefits and lessons that come from knowing what really happened.",
//          time: "11h00"
        }
      },
//      {
//        name: "Lunch",
//        time: "12h00"
//      },
      {
        name: "Paul Doherty",
        photo: "themes/skeptical/img/speakers/doherty.jpg",
        bio: "Paul Doherty is a Senior Staff Scientist and Director of the Teacher Institute at the Exploratorium where his main job is helping high school science teachers make science relevant, interesting, correct and fun.",
        company: "San Francisco Exploratorium",

        presentation: {
          title: "The Boundaries of Science",
          description: "If you plot every object we know in the universe on a graph of mass versus radius all of the objects appear within a triangle of three lines: the event horizon of a black hole, the radius of the visible universe and the compton wavelength. Inside this triangle we can do experimental science. Outside of this triangle we can theorize but cannot test our theories. Scientists always push on the boundaries and as we make progress pushing experiments into new realms we expand the boundaries of science.",
 //         time: "13h00"
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
//          time: "14h00"
        }
      },
 /*     {
        name: "Coffee-break",
        time: "15h00"
      },*/
      {
        name: "Patrick O'Reilly",
        photo: "themes/skeptical/img/speakers/oreilly.jpg",
        bio: "Patrick O'Reilly is a clinical psychologist and an assistant clinical professor of psychiatry at the University of California, San Francisco School of Medicine. He is Past President of the San Francisco Psychological Association and former Chair of Bay Area Skeptics.",
        company: "University of California, San Francisco School of Medicine",
        presentation: {
          title: "Cons, Scams and Undue Influence",
          description: "Internet Scams,  Ponzi schemes, real estate rip-offs, weird cults, fortune-telling cons – it’s hard to read the news without finding another successful con artist at work. As the number of scams and victims grows, the term “undue influence” is gaining widespread use. Dr. O’Reilly will explain the vulnerabilities that these scammers look for and techniques they use to steal from us.",
//          time: "16h00"
        }
      },
      {
        name: "Norm Goldblatt",
        photo: "themes/skeptical/img/speakers/goldblatt.jpg",
        bio: "Norm Goldblatt performs his science comedy all over the San Francisco Bay Area: at nightclubs, comedy clubs, corporate events, private parties, and fundraisers. His humor touches on technology, science, politics, and the human condition. His quips were quoted regularly by the late great Herb Caen in the San Francisco Chronicle, and his jokes are heard on the Tonight Show with Jay Leno.",
        company: "",
        presentation: {
          title: "Comedy",
//          time: "16h00"
        }
      },
      {
        name: "Ben Santer",
        photo: "themes/skeptical/img/speakers/santer.jpg",
 //       bio: "Program for Climate Model Diagnosis and Intercomparison, LLNL",
        company: "",
        presentation: {
          title: "A Discernible Human Influence on Global Climate",
//          time: "16h00"
          description: "Human-caused climate change is not a hypothetical future event. It is real, and we are experiencing it in our lifetimes. Despite the compelling evidence of human effects on global climate, there is a continuing need for scientists to answer the question “How do we know it’s us?” The first part of my talk will briefly summarize the scientific underpinning for “discernible human influence” conclusions of the Intergovernmental Panel on Climate Change (IPCC) and the U.S. National Academy of Sciences (NAS). The focus will be on so-called “fingerprint” studies. Such studies use complex computer models of the climate system to understand how geographical patterns of temperature and moisture (and many other climatic variables) may change in response to human influences. Fingerprinting involves searching for model-predicted \"human influence\" patterns in observational climate records. The message from this body of research is that observed changes in many different (and independently-measured) aspects of the climate system cannot be explained by natural causes alone."
        }
      },
      {
        name: "Sheril Kirshenbaum",
        photo: "themes/skeptical/img/speakers/kirshenbaum.jpg",
        bio: "Sheril Kirshenbaum works to enhance public understanding of science and improve communication between scientists, policymakers, and the public. She is the Director of The Energy Poll at The University of Texas at Austin and the author of two books, Unscientific America (with Chris Mooney) and The Science of Kissing. Her writing regularly appears in magazines, newspapers, and scientific journals and she has been featured in the Best American Science Writing anthology series. Previously, Sheril worked with the Webber Energy Group and Duke University's Nicholas School of the Environment. She has been a Marshall Memorial Fellow, a Next Generation Project Texas Fellow, and a legislative Knauss Science Fellow on Capitol Hill with Senator Bill Nelson (D-FL) where she was involved in energy, climate, and ocean policy.",
        company: "",
        presentation: {
          title: "Science Literacy in the 21st Century",
//          time: "16h00"
          description: ""
        }
      },
      {
        name: "Frank Mosher",
        photo: "themes/skeptical/img/speakers/mosher.jpg",
        bio: "Frank Mosher works as a Mad Scientist for Mad Science of Sacramento Valley. He teaches hands-on science enrichment in schools and for organizations throughout Sacramento and the surrounding areas, both in the classroom and after-school, as well as designing and implementing science summer camps. Frank also serves as the President for the Sacramento Area Skeptics.",
        company: "",
        presentation: {
          title: "TBD",
//          time: "16h00"
          description: "Our children are our future... future voters, future consumers, future politicians, future adults. Our best hope for the future is to raise a generation of critical thinkers, a generation of people who understand why science works, and why we should care about what science has to tell us. So how do we do this? How do we show children how exciting science is, how powerful of a tool critical thinking is? In this hour we will learn some tools and techniques for getting kids excited about learning science and being skeptical."
        }
      },

    ],

    // List of Sponsors
    sponsors: [
      {
        name: "Eventick",
        logo: "themes/yellow-swan/img/sponsor.png",
        url: "http://eventick.com.br"
      }
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