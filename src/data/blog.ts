import passionThumbnail from "../assets/blog/a_passion_or_nothing.png";

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
];