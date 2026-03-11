import type { Podcast } from '@/types';

export interface GenreData {
  id: number;
  title: string;
  color: string;
  topShows: Podcast[];
  essentials: Podcast[];
}

// --- Shared show pools ---

const trueCrimeShows: Podcast[] = [
  { id: 'crime-junkie', title: 'Crime Junkie', author: 'audiochuck', artwork: '/images/artwork/crime-junkie.jpg', category: 'True Crime' },
  { id: 'dateline-nbc', title: 'Dateline NBC', author: 'NBC News', artwork: '/images/artwork/dateline-nbc.jpg', category: 'True Crime' },
  { id: 'morbid', title: 'Morbid', author: 'audiochuck', artwork: '/images/artwork/morbid.jpg', category: 'True Crime', isExplicit: true },
  { id: 'sword-and-scale', title: 'Sword and Scale', author: 'Incongruity', artwork: '/images/artwork/sword-and-scale.jpg', category: 'True Crime', isExplicit: true },
  { id: 'american-criminal', title: 'American Criminal', author: 'Campside Media', artwork: '/images/artwork/american-criminal.jpg', category: 'True Crime' },
  { id: 'they-walk-among-us', title: 'They Walk Among Us', author: 'Benjamin Fitton', artwork: '/images/artwork/they-walk-among-us.jpg', category: 'True Crime', isExplicit: true },
];

const trueCrimeEssentials: Podcast[] = [
  { id: 'serial', title: 'Serial', author: 'Serial Productions', artwork: '/images/artwork/crime-junkie.jpg', category: 'True Crime' },
  { id: 'my-favorite-murder', title: 'My Favorite Murder', author: 'Exactly Right', artwork: '/images/artwork/morbid.jpg', category: 'True Crime', isExplicit: true },
  { id: 'casefile', title: 'Casefile True Crime', author: 'Casefile Presents', artwork: '/images/artwork/sword-and-scale.jpg', category: 'True Crime' },
  { id: 'bear-brook', title: 'Bear Brook', author: 'New Hampshire Public Radio', artwork: '/images/artwork/american-criminal.jpg', category: 'True Crime' },
  { id: 'generation-why', title: 'Generation Why', author: 'Aaron & Justin', artwork: '/images/artwork/dateline-nbc.jpg', category: 'True Crime' },
  { id: 'up-and-vanished', title: 'Up and Vanished', author: 'Tenderfoot TV', artwork: '/images/artwork/they-walk-among-us.jpg', category: 'True Crime' },
];

const newsShows: Podcast[] = [
  { id: 'the-daily', title: 'The Daily', author: 'The New York Times', artwork: '/images/artwork/the-daily.jpg', category: 'News' },
  { id: 'pod-save-america', title: 'Pod Save America', author: 'Crooked Media', artwork: '/images/artwork/pod-save-america.jpg', category: 'Politics' },
  { id: 'the-ezra-klein-show', title: 'The Ezra Klein Show', author: 'New York Times Opinion', artwork: '/images/artwork/the-ezra-klein-show.jpg', category: 'News' },
  { id: 'up-first', title: 'Up First', author: 'NPR', artwork: '/images/artwork/the-daily.jpg', category: 'News' },
  { id: 'politics-war-room', title: 'Politics War Room', author: 'Independent', artwork: '/images/artwork/pod-save-america.jpg', category: 'Politics' },
  { id: 'global-news-podcast', title: 'Global News Podcast', author: 'BBC World Service', artwork: '/images/artwork/the-ezra-klein-show.jpg', category: 'News' },
];

const newsEssentials: Podcast[] = [
  { id: 'fresh-air', title: 'Fresh Air', author: 'NPR', artwork: '/images/artwork/this-american-life.png', category: 'Society & Culture' },
  { id: 'the-journal', title: 'The Journal', author: 'WSJ & Gimlet', artwork: '/images/artwork/the-daily.jpg', category: 'News' },
  { id: 'rachael-maddow', title: 'The Rachel Maddow Show', author: 'MSNBC', artwork: '/images/artwork/pod-save-america.jpg', category: 'Politics' },
  { id: 'bbc-world-service', title: 'BBC World Service', author: 'BBC', artwork: '/images/artwork/the-ezra-klein-show.jpg', category: 'News' },
  { id: 'the-indicator', title: 'The Indicator from Planet Money', author: 'NPR', artwork: '/images/artwork/hidden-brain.jpg', category: 'Business News' },
  { id: 'the-big-story', title: 'The Big Story', author: 'Ricochet Media', artwork: '/images/artwork/the-daily.jpg', category: 'News' },
];

const comedyShows: Podcast[] = [
  { id: 'joe-rogan', title: 'The Joe Rogan Experience', author: 'Joe Rogan', artwork: '/images/artwork/the-joe-rogan-experience.jpg', category: 'Comedy', isExplicit: true },
  { id: 'smartless', title: 'SmartLess', author: 'Jason Bateman, Sean Hayes, Will Arnett', artwork: '/images/artwork/smartless.jpg', category: 'Comedy', isExplicit: true },
  { id: 'armchair-expert', title: 'Armchair Expert with Dax Shepard', author: 'Dax Shepard', artwork: '/images/artwork/armchair-expert.jpg', category: 'Comedy', isExplicit: true },
  { id: 'giggly-squad', title: 'Giggly Squad', author: 'Hannah Berner & Paige DeSorbo', artwork: '/images/artwork/giggly-squad.jpg', category: 'Comedy', isExplicit: true },
  { id: 'good-hang-amy', title: 'Good Hang with Amy Poehler', author: 'Amy Poehler', artwork: '/images/artwork/good-hang-amy-poehler.jpg', category: 'Comedy' },
  { id: 'wait-wait', title: "Wait Wait... Don't Tell Me!", author: 'NPR', artwork: '/images/artwork/wait-wait-dont-tell-me.jpg', category: 'Comedy' },
];

const comedyEssentials: Podcast[] = [
  { id: 'conan-obrien', title: 'Conan O\'Brien Needs a Friend', author: 'Team Coco', artwork: '/images/artwork/smartless.jpg', category: 'Comedy' },
  { id: 'how-did-this-get-made', title: 'How Did This Get Made?', author: 'Earwolf', artwork: '/images/artwork/wait-wait-dont-tell-me.jpg', category: 'Comedy' },
  { id: 'my-brother-my-brother', title: 'My Brother, My Brother and Me', author: 'McElroy Family', artwork: '/images/artwork/giggly-squad.jpg', category: 'Comedy' },
  { id: 'comedy-bang-bang', title: 'Comedy Bang Bang', author: 'Earwolf', artwork: '/images/artwork/good-hang-amy-poehler.jpg', category: 'Comedy' },
  { id: 'stuff-you-missed', title: 'Stuff You Missed in History Class', author: 'iHeart Podcasts', artwork: '/images/artwork/stuff-you-should-know.jpg', category: 'Education' },
  { id: 'no-such-thing-fish', title: 'No Such Thing as a Fish', author: 'No Such Thing as a Fish', artwork: '/images/artwork/no-such-thing-as-a-fish.png', category: 'Comedy' },
];

const societyCultureShows: Podcast[] = [
  { id: 'this-american-life', title: 'This American Life', author: 'This American Life', artwork: '/images/artwork/this-american-life.png', category: 'Society & Culture' },
  { id: 'call-her-daddy', title: 'Call Her Daddy', author: 'Alex Cooper', artwork: '/images/artwork/call-her-daddy.jpg', category: 'Society & Culture', isExplicit: true },
  { id: 'hidden-brain', title: 'Hidden Brain', author: 'Hidden Brain Media', artwork: '/images/artwork/hidden-brain.jpg', category: 'Science' },
  { id: 'stuff-you-should-know', title: 'Stuff You Should Know', author: 'iHeart Podcasts', artwork: '/images/artwork/stuff-you-should-know.jpg', category: 'Education' },
  { id: 'the-rest-is-entertainment', title: 'The Rest Is Entertainment', author: 'Goalhanger Podcasts', artwork: '/images/artwork/the-rest-is-entertainment.jpg', category: 'Society & Culture' },
  { id: 'armchair-expert-sc', title: 'Armchair Expert with Dax Shepard', author: 'Dax Shepard', artwork: '/images/artwork/armchair-expert.jpg', category: 'Society & Culture', isExplicit: true },
];

const societyCultureEssentials: Podcast[] = [
  { id: 'freakonomics', title: 'Freakonomics Radio', author: 'Freakonomics Radio + Stitcher', artwork: '/images/artwork/hidden-brain.jpg', category: 'Business' },
  { id: 'radiolab', title: 'Radiolab', author: 'WNYC Studios', artwork: '/images/artwork/this-american-life.png', category: 'Science' },
  { id: 'ted-talks-daily', title: 'TED Talks Daily', author: 'TED', artwork: '/images/artwork/stuff-you-should-know.jpg', category: 'Education' },
  { id: 'invisibilia', title: 'Invisibilia', author: 'NPR', artwork: '/images/artwork/the-rest-is-entertainment.jpg', category: 'Society & Culture' },
  { id: 'on-being', title: 'On Being with Krista Tippett', author: 'On Being Studios', artwork: '/images/artwork/call-her-daddy.jpg', category: 'Society & Culture' },
  { id: 'snap-judgment', title: 'Snap Judgment', author: 'Snap Judgment', artwork: '/images/artwork/hidden-brain.jpg', category: 'Society & Culture' },
];

const businessShows: Podcast[] = [
  { id: 'how-i-built-this', title: 'How I Built This with Guy Raz', author: 'Guy Raz | Wondery', artwork: '/images/artwork/hidden-brain.jpg', category: 'Business' },
  { id: 'planet-money', title: 'Planet Money', author: 'NPR', artwork: '/images/artwork/the-ezra-klein-show.jpg', category: 'Business' },
  { id: 'masters-of-scale', title: 'Masters of Scale', author: 'WaitWhat', artwork: '/images/artwork/stuff-you-should-know.jpg', category: 'Business' },
  { id: 'the-indicator', title: 'The Indicator from Planet Money', author: 'NPR', artwork: '/images/artwork/hidden-brain.jpg', category: 'Business News' },
  { id: 'we-study-billionaires', title: 'We Study Billionaires', author: 'The Investor\'s Podcast Network', artwork: '/images/artwork/the-daily.jpg', category: 'Investing' },
  { id: 'acquired', title: 'Acquired', author: 'Ben Gilbert and David Rosenthal', artwork: '/images/artwork/the-rest-is-entertainment.jpg', category: 'Business' },
];

const businessEssentials: Podcast[] = [
  { id: 'founders', title: 'Founders', author: 'David Senra', artwork: '/images/artwork/hidden-brain.jpg', category: 'Business' },
  { id: 'lex-fridman', title: 'Lex Fridman Podcast', author: 'Lex Fridman', artwork: '/images/artwork/the-joe-rogan-experience.jpg', category: 'Technology' },
  { id: 'ted-business', title: 'TED Business', author: 'TED', artwork: '/images/artwork/stuff-you-should-know.jpg', category: 'Business' },
  { id: 'the-knowledge-project', title: 'The Knowledge Project', author: 'Farnam Street', artwork: '/images/artwork/the-ezra-klein-show.jpg', category: 'Self-Improvement' },
  { id: 'invest-like-the-best', title: 'Invest Like the Best', author: 'Colossus', artwork: '/images/artwork/the-rest-is-entertainment.jpg', category: 'Investing' },
  { id: 'a16z-podcast', title: 'a16z Podcast', author: 'Andreessen Horowitz', artwork: '/images/artwork/the-daily.jpg', category: 'Technology' },
];

const historyShows: Podcast[] = [
  { id: 'hardcore-history', title: 'Hardcore History', author: 'Dan Carlin', artwork: '/images/artwork/the-ancients.jpg', category: 'History' },
  { id: 'the-ancients', title: 'The Ancients', author: 'History Hit', artwork: '/images/artwork/the-ancients.jpg', category: 'History' },
  { id: 'revolutions', title: 'Revolutions', author: 'Mike Duncan', artwork: '/images/artwork/this-american-life.png', category: 'History' },
  { id: 'history-extra', title: 'History Extra Podcast', author: 'HistoryExtra', artwork: '/images/artwork/intrigue.jpg', category: 'History' },
  { id: 'american-history-tellers', title: 'American History Tellers', author: 'Wondery', artwork: '/images/artwork/american-criminal.jpg', category: 'History' },
  { id: 'the-fall-of-civilization', title: 'The Fall of Civilizations', author: 'Paul Cooper', artwork: '/images/artwork/determined-society.jpg', category: 'History' },
];

const historyEssentials: Podcast[] = [
  { id: 'throughline', title: 'Throughline', author: 'NPR', artwork: '/images/artwork/this-american-life.png', category: 'History' },
  { id: 'the-history-of-rome', title: 'The History of Rome', author: 'Mike Duncan', artwork: '/images/artwork/the-ancients.jpg', category: 'History' },
  { id: 'history-of-wwii', title: 'WW2 Podcast', author: 'Angus Wallace', artwork: '/images/artwork/intrigue.jpg', category: 'History' },
  { id: 'blindspot', title: 'Blindspot: The Road to 9/11', author: 'Campside Media', artwork: '/images/artwork/american-criminal.jpg', category: 'History' },
  { id: 'tides-of-history', title: 'Tides of History', author: 'Wondery', artwork: '/images/artwork/determined-society.jpg', category: 'History' },
  { id: 'empire-podcast', title: 'Empire', author: 'Goalhanger Podcasts', artwork: '/images/artwork/the-ancients.jpg', category: 'History' },
];

const kidsShows: Podcast[] = [
  { id: 'wow-in-the-world', title: 'Wow in the World', author: 'Tinkercast', artwork: '/images/artwork/attention-lab.png', category: 'Kids & Family' },
  { id: 'circle-round', title: 'Circle Round', author: 'WBUR', artwork: '/images/artwork/safe-to-drink.jpg', category: 'Stories for Kids' },
  { id: 'brains-on', title: 'Brains On!', author: 'American Public Media', artwork: '/images/artwork/attention-lab.png', category: 'Kids & Family' },
  { id: 'bumper-car-adventures', title: 'Story Pirates', author: 'Story Pirates', artwork: '/images/artwork/the-secret-world-of-roald-dahl.jpg', category: 'Kids & Family' },
  { id: 'absolute-genius', title: 'Absolute Genius with Dick and Dom', author: 'BBC', artwork: '/images/artwork/safe-to-drink.jpg', category: 'Kids & Family' },
  { id: 'pinna', title: 'Pinna Podcast', author: 'Pinna', artwork: '/images/artwork/attention-lab.png', category: 'Kids & Family' },
];

const kidsEssentials: Podcast[] = [
  { id: 'pants-on-fire', title: 'But Why: A Podcast for Curious Kids', author: 'Vermont Public', artwork: '/images/artwork/safe-to-drink.jpg', category: 'Kids & Family' },
  { id: 'smash-boom-best', title: 'Smash Boom Best', author: 'American Public Media', artwork: '/images/artwork/attention-lab.png', category: 'Kids & Family' },
  { id: 'tumble-science', title: 'Tumble Science Podcast for Kids', author: 'Tumble Media', artwork: '/images/artwork/the-secret-world-of-roald-dahl.jpg', category: 'Kids & Family' },
  { id: 'wild-kratts', title: 'Wild Kratts Podcast', author: 'PBS KIDS', artwork: '/images/artwork/safe-to-drink.jpg', category: 'Kids & Family' },
  { id: 'tales-podcast', title: 'Tales', author: 'Wondery', artwork: '/images/artwork/attention-lab.png', category: 'Kids & Family' },
  { id: 'noodle-loving-monster', title: 'Noodle Loving Monster', author: 'Tinkercast', artwork: '/images/artwork/the-secret-world-of-roald-dahl.jpg', category: 'Kids & Family' },
];

const sportsShows: Podcast[] = [
  { id: 'the-bill-simmons', title: 'The Bill Simmons Podcast', author: 'The Ringer', artwork: '/images/artwork/nfl-free-agency.jpg', category: 'Sports' },
  { id: 'pardon-the-interruption', title: 'Pardon the Interruption', author: 'ESPN', artwork: '/images/artwork/the-shawn-ryan-show.jpg', category: 'Sports' },
  { id: 'first-take', title: 'First Take', author: 'ESPN', artwork: '/images/artwork/nfl-free-agency.jpg', category: 'Sports' },
  { id: 'spittin-chiclets', title: "Spittin' Chiclets", author: 'Barstool Sports', artwork: '/images/artwork/the-shawn-ryan-show.jpg', category: 'Sports' },
  { id: 'the-athletic-football', title: 'The Athletic Football Show', author: 'The Athletic', artwork: '/images/artwork/nfl-free-agency.jpg', category: 'Sports' },
  { id: 'woj-pod', title: 'The Woj Pod', author: 'ESPN', artwork: '/images/artwork/the-shawn-ryan-show.jpg', category: 'Sports' },
];

const sportsEssentials: Podcast[] = [
  { id: 'the-dan-patrick-show', title: 'The Dan Patrick Show', author: 'Dan Patrick', artwork: '/images/artwork/nfl-free-agency.jpg', category: 'Sports' },
  { id: 'around-the-nfl', title: 'Around The NFL', author: 'NFL', artwork: '/images/artwork/the-shawn-ryan-show.jpg', category: 'Sports' },
  { id: 'the-herd', title: 'The Herd with Colin Cowherd', author: 'Fox Sports', artwork: '/images/artwork/nfl-free-agency.jpg', category: 'Sports' },
  { id: 'no-dunks', title: 'No Dunks', author: 'The Athletic', artwork: '/images/artwork/the-shawn-ryan-show.jpg', category: 'Sports' },
  { id: 'full-48', title: 'The Full 48', author: 'The Athletic', artwork: '/images/artwork/nfl-free-agency.jpg', category: 'Sports' },
  { id: 'richard-ashby', title: 'Richard Ashby Cricket Podcast', author: 'Sky Sports', artwork: '/images/artwork/the-shawn-ryan-show.jpg', category: 'Sports' },
];

const selfImprovementShows: Podcast[] = [
  { id: 'huberman-lab', title: 'Huberman Lab', author: 'Scicomm Media', artwork: '/images/artwork/hidden-brain.jpg', category: 'Health & Fitness' },
  { id: 'the-diary-of-a-ceo', title: 'The Diary of a CEO', author: 'Steven Bartlett', artwork: '/images/artwork/stuff-you-should-know.jpg', category: 'Self-Improvement' },
  { id: 'mel-robbins', title: 'The Mel Robbins Podcast', author: 'Mel Robbins', artwork: '/images/artwork/the-rest-is-entertainment.jpg', category: 'Self-Improvement' },
  { id: 'on-purpose', title: 'On Purpose with Jay Shetty', author: 'iHeart Podcasts', artwork: '/images/artwork/hidden-brain.jpg', category: 'Self-Improvement' },
  { id: 'good-life-project', title: 'Good Life Project', author: 'Jonathan Fields', artwork: '/images/artwork/armchair-expert.jpg', category: 'Self-Improvement' },
  { id: 'tim-ferriss-show', title: 'The Tim Ferriss Show', author: 'Tim Ferriss', artwork: '/images/artwork/stuff-you-should-know.jpg', category: 'Self-Improvement' },
];

const selfImprovementEssentials: Podcast[] = [
  { id: 'feel-better-live-more', title: 'Feel Better, Live More', author: 'Dr Rangan Chatterjee', artwork: '/images/artwork/hidden-brain.jpg', category: 'Health & Fitness' },
  { id: 'the-happiness-lab', title: 'The Happiness Lab', author: 'Pushkin Industries', artwork: '/images/artwork/this-american-life.png', category: 'Self-Improvement' },
  { id: 'no-stupid-questions', title: 'No Stupid Questions', author: 'Freakonomics Radio', artwork: '/images/artwork/the-rest-is-entertainment.jpg', category: 'Self-Improvement' },
  { id: 'dare-to-lead', title: 'Dare to Lead', author: 'Brené Brown', artwork: '/images/artwork/armchair-expert.jpg', category: 'Self-Improvement' },
  { id: 'school-of-greatness', title: 'The School of Greatness', author: 'Lewis Howes', artwork: '/images/artwork/hidden-brain.jpg', category: 'Self-Improvement' },
  { id: 'not-overthinking', title: 'Not Overthinking', author: 'Taimur & Ali Abdaal', artwork: '/images/artwork/stuff-you-should-know.jpg', category: 'Self-Improvement' },
];

const mentalHealthShows: Podcast[] = [
  { id: 'unlocking-us', title: 'Unlocking Us with Brené Brown', author: 'Brené Brown', artwork: '/images/artwork/armchair-expert.jpg', category: 'Mental Health' },
  { id: 'therapy-for-black-girls', title: 'Therapy for Black Girls', author: 'iHeart Podcasts', artwork: '/images/artwork/call-her-daddy.jpg', category: 'Mental Health' },
  { id: 'your-time-to-thrive', title: 'Your Time to Thrive', author: 'iHeart Podcasts', artwork: '/images/artwork/the-rest-is-entertainment.jpg', category: 'Mental Health' },
  { id: 'where-should-we-begin', title: 'Where Should We Begin?', author: 'Pushkin Industries', artwork: '/images/artwork/this-american-life.png', category: 'Relationships' },
  { id: 'all-in-the-mind', title: 'All in the Mind', author: 'ABC Radio National', artwork: '/images/artwork/hidden-brain.jpg', category: 'Mental Health' },
  { id: 'psych2go', title: 'Psych2Go Podcast', author: 'Psych2Go', artwork: '/images/artwork/stuff-you-should-know.jpg', category: 'Mental Health' },
];

const mentalHealthEssentials: Podcast[] = [
  { id: 'the-mental-illness-happy-hour', title: 'Mental Illness Happy Hour', author: 'Paul Gilmartin', artwork: '/images/artwork/armchair-expert.jpg', category: 'Mental Health', isExplicit: true },
  { id: 'overthink', title: 'Overthink', author: 'Ellie Anderson & David Peña-Guzman', artwork: '/images/artwork/hidden-brain.jpg', category: 'Philosophy' },
  { id: 'feel-better-live-better', title: 'Healing Trauma Podcast', author: 'Monique Koven', artwork: '/images/artwork/this-american-life.png', category: 'Mental Health' },
  { id: 'ologies', title: 'Ologies with Alie Ward', author: 'Alie Ward', artwork: '/images/artwork/stuff-you-should-know.jpg', category: 'Science' },
  { id: 'ten-percent-happier', title: 'Ten Percent Happier', author: 'Dan Harris', artwork: '/images/artwork/call-her-daddy.jpg', category: 'Mental Health' },
  { id: 'therapist-uncensored', title: 'Therapist Uncensored', author: 'Sue Marriott & Ann Kelly', artwork: '/images/artwork/armchair-expert.jpg', category: 'Mental Health' },
];

const fictionShows: Podcast[] = [
  { id: 'levar-burton-reads', title: 'LeVar Burton Reads', author: 'Stitcher', artwork: '/images/artwork/the-secret-world-of-roald-dahl.jpg', category: 'Fiction' },
  { id: 'the-penumbra-podcast', title: 'The Penumbra Podcast', author: 'The Penumbra Podcast', artwork: '/images/artwork/burden-of-guilt.jpg', category: 'Fiction' },
  { id: 'wolf-359', title: 'Wolf 359', author: 'Kinda Evil Genius Productions', artwork: '/images/artwork/intrigue.jpg', category: 'Science Fiction' },
  { id: 'the-white-vault', title: 'The White Vault', author: 'Fool & Scholar Productions', artwork: '/images/artwork/the-sixth-bureau.jpg', category: 'Fiction' },
  { id: 'limetown', title: 'Limetown', author: 'Two-Up Productions', artwork: '/images/artwork/trace-of-suspicion.jpg', category: 'Fiction' },
  { id: 'steal-the-stars', title: 'Steal the Stars', author: 'Tor Labs', artwork: '/images/artwork/murder-at-the-u.jpg', category: 'Science Fiction' },
];

const fictionEssentials: Podcast[] = [
  { id: 'welcome-to-night-vale', title: 'Welcome to Night Vale', author: 'Night Vale Presents', artwork: '/images/artwork/the-secret-world-of-roald-dahl.jpg', category: 'Fiction' },
  { id: 'the-magnus-archives', title: 'The Magnus Archives', author: 'Rusty Quill', artwork: '/images/artwork/intrigue.jpg', category: 'Fiction' },
  { id: 'homecoming', title: 'Homecoming', author: 'Gimlet', artwork: '/images/artwork/burden-of-guilt.jpg', category: 'Fiction' },
  { id: 'the-bright-sessions', title: 'The Bright Sessions', author: 'Lauren Shippen', artwork: '/images/artwork/the-sixth-bureau.jpg', category: 'Fiction' },
  { id: 'archive-81', title: 'Archive 81', author: 'Dead Signals', artwork: '/images/artwork/trace-of-suspicion.jpg', category: 'Fiction' },
  { id: 'the-adventure-zone', title: 'The Adventure Zone', author: 'Maximum Fun', artwork: '/images/artwork/murder-at-the-u.jpg', category: 'Fiction' },
];

const natureShows: Podcast[] = [
  { id: 'outside-podcast', title: 'The Outside Podcast', author: 'Outside Magazine', artwork: '/images/artwork/safe-to-drink.jpg', category: 'Nature' },
  { id: 'nature-podcast', title: 'Nature Podcast', author: 'Nature', artwork: '/images/artwork/attention-lab.png', category: 'Science' },
  { id: 'the-naturalist', title: 'The Naturalist', author: 'Independent', artwork: '/images/artwork/safe-to-drink.jpg', category: 'Nature' },
  { id: 'rewilding-earth', title: 'Rewilding Earth', author: 'Rewilding Earth', artwork: '/images/artwork/attention-lab.png', category: 'Nature' },
  { id: 'america-s-national-parks', title: "America's National Parks", author: 'Independent', artwork: '/images/artwork/safe-to-drink.jpg', category: 'Nature' },
  { id: 'conservation-cast', title: 'ConservationCast', author: 'Wildlife Conservation Society', artwork: '/images/artwork/attention-lab.png', category: 'Nature' },
];

const natureEssentials: Podcast[] = [
  { id: 'our-changing-climate', title: 'Our Changing Climate', author: 'Charlie Kilpatrick', artwork: '/images/artwork/safe-to-drink.jpg', category: 'Nature' },
  { id: 'climate-one', title: 'Climate One', author: 'The Commonwealth Club', artwork: '/images/artwork/attention-lab.png', category: 'Nature' },
  { id: 'how-to-save-a-planet', title: 'How to Save a Planet', author: 'Gimlet', artwork: '/images/artwork/safe-to-drink.jpg', category: 'Nature' },
  { id: 'countdown', title: 'Countdown', author: 'TED', artwork: '/images/artwork/attention-lab.png', category: 'Nature' },
  { id: 'the-big-melt', title: 'The Big Melt', author: 'HuffPost', artwork: '/images/artwork/safe-to-drink.jpg', category: 'Nature' },
  { id: 'accidental-tech-podcast', title: 'Accidental Tech Podcast', author: 'Marco Arment, Casey Liss, John Siracusa', artwork: '/images/artwork/hard-drive.jpg', category: 'Technology' },
];

// --- Genre registry ---

export const genres: GenreData[] = [
  {
    id: 1488,
    title: 'True Crime',
    color: '#5858EE',
    topShows: trueCrimeShows,
    essentials: trueCrimeEssentials,
  },
  {
    id: 1489,
    title: 'News',
    color: '#00AAFF',
    topShows: newsShows,
    essentials: newsEssentials,
  },
  {
    id: 1303,
    title: 'Comedy',
    color: '#FFAA00',
    topShows: comedyShows,
    essentials: comedyEssentials,
  },
  {
    id: 1324,
    title: 'Society & Culture',
    color: '#FF6030',
    topShows: societyCultureShows,
    essentials: societyCultureEssentials,
  },
  {
    id: 1321,
    title: 'Business',
    color: '#007AFF',
    topShows: businessShows,
    essentials: businessEssentials,
  },
  {
    id: 1487,
    title: 'History',
    color: '#FF9500',
    topShows: historyShows,
    essentials: historyEssentials,
  },
  {
    id: 1305,
    title: 'Kids & Family',
    color: '#30D158',
    topShows: kidsShows,
    essentials: kidsEssentials,
  },
  {
    id: 1545,
    title: 'Sports',
    color: '#30B0C7',
    topShows: sportsShows,
    essentials: sportsEssentials,
  },
  {
    id: 1500,
    title: 'Self-Improvement',
    color: '#AF52DE',
    topShows: selfImprovementShows,
    essentials: selfImprovementEssentials,
  },
  {
    id: 1517,
    title: 'Mental Health',
    color: '#1ABDA5',
    topShows: mentalHealthShows,
    essentials: mentalHealthEssentials,
  },
  {
    id: 1483,
    title: 'Fiction',
    color: '#FF3B1E',
    topShows: fictionShows,
    essentials: fictionEssentials,
  },
  {
    id: 1537,
    title: 'Nature',
    color: '#30D158',
    topShows: natureShows,
    essentials: natureEssentials,
  },
];

export function getGenreById(id: number): GenreData | undefined {
  return genres.find((g) => g.id === id);
}
