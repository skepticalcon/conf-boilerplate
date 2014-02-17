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
        link: "http://eventick.com.br"
    },

    // "Fork me on GitHub", if you don't want this, just remove the forkButton property
/*    forkButton: {
        repository: "https://github.com/braziljs/conf-boilerplate"
    },*/

    // Site info
    site: {
      theme: "skeptical",
      url: "http://braziljs.github.io/conf-boilerplate/",
      googleanalytics: "UA-33656081-1"
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
      'partners'
      // 'contact'
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
        name: "Check-in / Breakfast",
        time: "9h00"
      },
      {
        name: "Sheldon Helms",
        photo: "themes/skeptical/img/speakers/helms.jpg",
        bio: "Sheldon W. Helms is an associate professor of psychology at Ohlone College in Fremont, CA.  He serves on the Board of Directors for the Bay Area Skeptics, is a member of the SkeptiCal planning committee, and is the founder of the Ohlone Psychology Club Speaker Series through which he regularly hosts top name speakers in science and skepticism.",
        company: "Ohlone College, Fremont, California",
        presentation: {
          title: "Digging into a Linux Kernel",
          description: "As doctors battle homeopathy and anti-vaccine myths, anthropologists counter creationist claims, and dietitians deal with the unwarranted battle against gluten and GMOs, much of the skeptical community is oddly silent on dubious claims from fringe psychology. In this talk, psychology professor Sheldon W. Helms will discuss unsupported and sometimes dangerously pseudo-scientific claims from the field of psychology, giving a brief history and explanation of each practice or theory, and demonstrating how a simple application of the scientific method reveals its flaws.",
          time: "10h00"
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
          time: "11h00"
        }
      },
      {
        name: "Lunch",
        time: "12h00"
      },
      {
        name: "Paul Doherty",
        photo: "themes/skeptical/img/speakers/doherty.jpg",
        bio: "Paul Doherty is a Senior Staff Scientist and Director of the Teacher Institute at the Exploratorium where his main job is helping high school science teachers make science relevant, interesting, correct and fun.",
        company: "San Francisco Exploratorium",

        presentation: {
          title: "The Boundaries of Science",
          description: "If you plot every object we know in the universe on a graph of mass versus radius all of the objects appear within a triangle of three lines: the event horizon of a black hole, the radius of the visible universe and the compton wavelength. Inside this triangle we can do experimental science. Outside of this triangle we can theorize but cannot test our theories. Scientists always push on the boundaries and as we make progress pushing experiments into new realms we expand the boundaries of science.",
          time: "13h00"
        }
      },
      {
        name: "Dan Dugan",
        photo: "themes/skeptical/img/speakers/dugan.jpg",
        bio: "Dan Dugan is well-known in audio engineering as the inventor of the automatic microphone mixer. His patented equipment is used on many popular television productions including PBS News Hour, the presidential debates, and ESPN sports. In addition to engineering, Dan has a lively interest in philosophy, particularly skepticism, the philosophy of science, and current controversies about scientific paradigms and alternative medicine. He is the Secretary of PLANS (People for Legal and Nonsectarian Schools, Inc.), a whistle-blowing organization opposing taxpayer funding of Waldorf education.",
        company: "",
        presentation: {
          title: "Waldorf",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
          time: "14h00"
        }
      },
      {
        name: "Coffee-break",
        time: "15h00"
      },
      {
        name: "Mark Zuckerberg",
        photo: "themes/yellow-swan/img/speaker.jpg",
        bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
        company: "Facebook",
        link: {
          href: "http://twitter.com/zuck",
          text: "@zuck"
        },
        presentation: {
          title: "Revealing Facebook Secrets",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
          time: "16h00"
        }
      },
      {
        name: "Steve Wozniak",
        photo: "themes/yellow-swan/img/speaker.jpg",
        bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
        company: "Apple, Inc.",
        link: {
          href: "http://twitter.com/woz",
          text: "@woz"
        },
        presentation: {
          title: "Why do I prefer Android over iPhone",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
          time: "17h00"
        }
      }
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