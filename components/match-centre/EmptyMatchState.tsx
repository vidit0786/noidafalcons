type EmptyMatchStateProps = {
  title: string;
  description: string;
  sourceUrl: string;
};

export default function EmptyMatchState({ title, description, sourceUrl }: EmptyMatchStateProps) {
  return (
    <div className="flex min-h-[520px] flex-col items-center justify-center rounded-[1.6rem] border border-dashed border-white/15 bg-black/28 p-8 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-falcon-orange/15 text-3xl shadow-glow">🏏</div>
      <h3 className="mt-5 text-2xl font-black uppercase text-white">{title}</h3>
      <p className="mt-3 max-w-md leading-7 text-white/62">{description}</p>
      <a href={sourceUrl} target="_blank" rel="noreferrer" className="premium-button mt-6 border border-white/12 bg-white/[0.07] text-white hover:border-falcon-orange/60 hover:bg-falcon-orange/80">
        Open CricHeroes
      </a>
    </div>
  );
}
