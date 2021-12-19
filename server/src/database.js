import mongoose from "mongoose";
import Wish from "./model/wish.js";

export async function connectDatabase() {
  const connectionString = process.env.MONGODB_URL;

  if (!connectionString) {
    throw new Error(
      "MONGODB_URL not set as environment variable. Please configure it in an .env file."
    );
  }

  return mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }, 
  () => console.log('Connected to DB'));
};
export async function seedDatabase(){
  const wishCount = await Wish.countDocuments();

  if(wishCount == 0) { 
    console.log('Seeding database')
    const defaultWish = [
      { 
        "title": "Apple iPhone 12 Pro", 
        "descriptions" : "A like-new experience. Backed by a one-year satisfaction guarantee.This Renewed Premium product is shipped and sold by Amazon and has been certified by Amazon to work and look like new. With at least 90% battery life, it comes in deluxe, Amazon-branded packaging and is backed by a one-year warranty and technical support.",
        "externalLink": "https://www.amazon.com/Apple-iPhone-12-Pro-Max/dp/B09JFFG8D7/ref=sr_1_1?keywords=Apple+iPhone+12+Pro&qid=1639750535&sr=8-1"
      },
      { 
        
        "title": "ADATA HD650 - 2TB HDD", 
        "descriptions" : "USB 3.1 Interface that works with PC, Mac, Linux Shock-Resistance, Scratch-resistance surface, AES 256 Encryption, 3 Year Warranty",
        "externalLink" :"https://www.amazon.com/ADATA-HD650-Shock-Resistant-External-AHD650-2TU31-CBK/dp/B07338G6GR/ref=sr_1_2?keywords=ADATA%2BHD650%2B-%2B2TB%2BHDD&qid=1639750299&sr=8-2&th=1#HLCXComparisonWidget_feature_div"
      },
      { 
        
        "title": "Philips OneBlade Face Razor", 
        "descriptions" : "Philips Norelco OneBlade Face + Body is a revolutionary grooming technology designed for facial styling and body grooming. It can trim, edge and shave any length of hair.",
        "externalLink": "https://www.amazon.com/Philips-Norelco-OneBlade-QP2520-72/dp/B07C2S3DMV/ref=sr_1_1_sspa?keywords=Philips+OneBlade+Face+Razor&qid=1639750582&sr=8-1-spons&psc=1&smid=A6EGA15UEFYEQ&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEzS1kxRURBN1pNMUNLJmVuY3J5cHRlZElkPUEwNDU3OTQyMU5CUkZMMDNPMlVQVyZlbmNyeXB0ZWRBZElkPUExMDQ1NjAyQVZIRjlYNk4zM1A1JndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ=="
      },
      { 
        
        "title": "The Emperor's Handbook: A New Translation of The Meditations", "descriptions:" : "Victor Davis HansonProfessor of Classics at California State UniversityThis new, accessible translation by Scot and David Hicks of the emperor's famous Stoic handbook reflects far better the flavor of Marcus Aurelius's own style. Americans should read Marcus -- and this new edition now makes it a joy.",
        "externalLink": "https://www.amazon.com/Emperors-Handbook-New-Translation-Meditations/dp/0743233832/ref=sr_1_1?crid=1X1KPT3UHTPRJ&keywords=the+emperors+handbook&qid=1639750619&sprefix=Emperors+hand%2Caps%2C229&sr=8-1"
      },
      { 
        
        "title": "The One by Dolce & Gabbana Eau De Parfum", 
        "descriptions" : "Launched by the design house of Dolce Gabbana in the year 2015. This woody spicy fragrance has a blend of coriander, basil, grapefruit, ginger, orange blossom, cardamom, tobacco, sensual amber, and cedar notes.",
        "externalLink": "https://www.amazon.com/DOLCE-GABBANA-One-Parfum-Spray/dp/B074L61FXT/ref=sr_1_5?crid=T27Y0N2MCNME&keywords=dolce+and+gabbana+the+one&qid=1639750706&sprefix=dolce%2Caps%2C244&sr=8-5"
      },
      { 
        
        "title": "RESPAWN RSP-110 Racing Style Gaming, Reclining Ergonomic Chair with Footrest, Green", "descriptions:" : "GAMIFIED SEATING: A racecar-style gaming chair that provides luxury and comfort, whether it's used for intense gaming sessions and climbing to the top of the leaderboards, or long work days.",
        "externalLink": "https://www.amazon.com/RESPAWN-110-Racing-Style-Gaming-Chair/dp/B076HTJRMZ/ref=sr_1_6?keywords=gaming+chairs&pd_rd_r=32bdbf43-408e-4b73-8b35-0101a287d119&pd_rd_w=jlGHM&pd_rd_wg=dycjL&pf_rd_p=12129333-2117-4490-9c17-6d31baf0582a&pf_rd_r=71SV3FYPX39GTGZDD5R4&qid=1639750773&sr=8-6"
      }
    ];
    await Wish.insertMany(defaultWish);
    console.log('Seeding database with %d quotes', defaultWish.length);
  } else {
    console.log('Database has content, not seeding')
  }

}