import content from './videos.json';

export type VideoClip = { title: string; file: string; poster?: string; runtime?: string };

export const featureDemo: VideoClip | undefined = content.feature;
export const bl10Tutorials: VideoClip[] = (content.tutorials ?? []).filter(({ file }) => file);
