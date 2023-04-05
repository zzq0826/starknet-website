export type Chapter = {
  id: string;
  title: string;
  startAt: number;
  endAt: number;
  thumbnail: string;
  description: string;
  videoId: string;
};
export const playlist: Chapter[] = [
  {
    id: "scaling-eth",
    title: "Scaling Ethereum",
    description: "Episode 1 explains how Starknet works at a high level",
    startAt: 0,
    endAt: 24,
    thumbnail: "/assets/video-thumbnail-placeholder.jpg",
    videoId: "e137ccdba732ebfe87a792d9066730c3",
  },
  {
    id: "starknet",
    title: "Starknet",
    description: "Episode 2 explains how Starknet works at a high level",
    startAt: 25,
    endAt: 50,
    thumbnail: "/assets/video-thumbnail-placeholder.jpg",
    videoId: "89f18f763dc367c248ddb647bc93ade3",
  },
  {
    id: "sequencer",
    title: "The Sequencer",
    description: "Episode 3 explains how Starknet works at a high level",
    startAt: 51,
    endAt: 74,
    thumbnail: "/assets/video-thumbnail-placeholder.jpg",
    videoId: "daac0b3cd34e7345ab5b0cac7afa4446",
  },
  {
    id: "prover",
    title: "The Prover",
    description: "Episode 4 explains how Starknet works at a high level",
    startAt: 75,
    endAt: 89,
    thumbnail: "/assets/video-thumbnail-placeholder.jpg",
    videoId: "daac0b3cd34e7345ab5b0cac7afa4446",
  },
  {
    id: "eth-settlement",
    title: "Ethereum settlement",
    description: "Episode 5 explains how Starknet works at a high level",
    startAt: 90,
    endAt: 110,
    thumbnail: "/assets/video-thumbnail-placeholder.jpg",
    videoId: "daac0b3cd34e7345ab5b0cac7afa4446",
  },
  {
    id: "builders",
    title: "Builders",
    description: "Episode 6 explains how Starknet works at a high level",
    startAt: 111,
    endAt: 136,
    thumbnail: "/assets/video-thumbnail-placeholder.jpg",
    videoId: "daac0b3cd34e7345ab5b0cac7afa4446",
  },
];

export const playlistObject: Record<string, Chapter> = playlist.reduce(
  (acc, chapter) => ({ [chapter.id]: chapter, ...acc }),
  {}
);
export const CHAPTER_CHANGE_TIMEOUT = 5;

export const VIDEOJS_INACTIVITY_TIMEOUT = 3000;