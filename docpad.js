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
          description: "In 1996, the opening of the Internet to the general population brought together a diverse  group of former Waldorf school parents, teachers, and board members who all had experiences with Anthroposophy, the world-wide organization behind Waldorf schools (called Steiner schools outside the U.S.). Their experiences were best explained if Anthroposophy were categorized as a religious cult. At the same time, Waldorf schools began to receive public funding as magnet and charter schools. PLANS was incorporated as a non-profit that could bring legal action against perceived violations of the Establishment Clause of the U.S. Constitution, which forbids public funding of religious activities. A lawsuit was filed in federal court against two California school districts, one with a Waldorf magnet school and one with a Waldorf charter school. First Amendment lawsuits take many years, and this was no exception. Volunteer lawyers came and went. Mistakes were made that the insurance-funded lawyers for the school districts exploited to whittle down the evidence. Despite three favorable rulings from the 9th Circuit Court of Appeals over the years, the case was dismissed in 2012 after the appeals court opined that there was no significant evidence left. The dismissal was without prejudice, however, and the way was left open to start all over again.",
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