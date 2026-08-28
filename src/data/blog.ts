import passionThumbnail from "../assets/blog/a_passion_or_nothing.png";
import overclockedThumbnail from "../assets/blog/Overclocked_into_Nothingness.png";

export type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  image: string;
  tags: string[];
};

export const blogPosts: BlogPost[] = [
  {
    id: "a-passion-or-nothing",
    title: "A Passion or Nothing",
    excerpt:
      "Passion gives meaning to talent, while discipline transforms passion into mastery",

    content: `
Ever since I was a child, I envied people who were naturally skilled, especially those labeled as "prodigies." This admiration sparked a personal challenge: to discover my own innate talent. I attended various arts programs, constantly searching for that elusive spark. While I excelled in some areas, the experience led me to a profound realization about human nature.
Human beings are like empty cups capable of holding any kind of liquid. We have the capacity to learn any skill we set our minds to. However, simply acquiring a skill doesn't guarantee lasting fulfillment. You might enjoy a new pursuit at first, but eventually, burnout sets in, and you quickly lose the motivation to continue.
So, how do we sustain joy in the skills we acquire and the talents we hone? The answer is passion. Returning to the cup metaphor: we can fill ourselves with whatever liquid we choose, but we don't always get to decide what material our cup is made of. If you pour boiling water into a fragile glass not designed to handle the heat, problems occur. To thrive, we must align our skills with our true passions and only our hearts can identify that alignment.
When you find that alignment, there are distinct signs that you are genuinely passionate about what you do. You lose track of time; you forget about hunger, fatigue, and your surroundings. You enter a state where reality seems to bend to your focus, and you feel capable of anything. I call this state "autopilot."
It is an intoxicating feeling. It's the kind of drive that wakes you up in the middle of the night with a brilliant idea, compelling you to get out of bed and execute it immediately.
We must be careful, however, not to confuse this temporary excitement with true passion. Sometimes, what feels like a calling is just hype disguised as purpose. When that hype inevitably fades, you find yourself back at square one. You feel burned out, demotivated, and perhaps a bit depressed, craving isolation in a dark room while simultaneously yearning for connection. It’s a frustrating, unexplainable emptiness.
This brings us to a harsh truth: a talent without passion is merely a talent, but passion without discipline is much worse.
To truly master a craft, passion is the fuel, but discipline is the engine. Having a passion is like raising a child, it requires nurturing, constant feeding, and significant sacrifice. You must practice, explore, and dedicate yourself to continuous improvement.
Remember that getting better at what you do is not a race, and comparing your journey to someone else's is counterproductive. It is perfectly okay to have lazy days, to feel down, or to feel like you aren't making progress. These are natural human emotions. What isn't okay is choosing to stay there.
We must continuously break our own barriers and overcome our internal challenges. There is no step-by-step tutorial for this, and you cannot simply copy someone else’s formula for success. The answers are already within you; you just need to find them.
Stop being so harsh on yourself. You have plenty of time to fall and get back up. Let's focus on improving our self-discipline and honing what we do best. And if you still feel like you haven't found your talent, ask yourself: is it truly missing, or have you simply failed to acknowledge it?

    `,

    date: "July 2026",
    readTime: "4 min read",
    image: passionThumbnail,
    tags: ["Mindset", "Productivity", "Self Growth"],
  },
  {
    id: "overclocked_into_Nothingness",
    title: "Overclocked into Nothingness",
    excerpt:
      "Burnt out and lost, I learned that while passion gives talent meaning, discipline turns it into mastery.",

    content: `
Stepping off the graduation stage felt like the start of a smoother, clearer chapter, but this year has brought unexpected storms and an overwhelming sense of uncertainty. Instead of feeling wiser, more grounded, or more prepared as time passes, it feels as though my momentum has completely stalled. The sharp focus, creativity, and inner drive that once defined me feel distant right now, making it difficult to recognize the person looking back at me or to see a confident path forward.

Being unemployed for these past two months has amplified everything, making each day feel impossibly long and heavy. It has triggered an exhausting cycle of overthinking, isolation, and deep second-guessing. It is painful to feel like this internal noise is spilling over into my personal life, creating distance with the friends and family I care about most. Every attempt to force a spark, distract myself, or simply relax seems to backfire, leaving my mind running at high speed on an empty tank—overclocked, yet producing nothing.

The regret over squandered time and missteps feels heavy, and the urge to hit a reset button is overwhelming. It is easy to look back and wish I could guide my past self toward better choices, but the weight of present consequences is what demands my attention now. Right now, the immediate need isn't to force a dramatic breakthrough or fight a battle on zero energy, but to acknowledge the profound exhaustion of this period and allow room for genuine rest.

    `,

    date: "August 2026",
    readTime: "2 min read",
    image: overclockedThumbnail,
    tags: ["Mindset", "Productivity", "Self Growth"],
  },
];