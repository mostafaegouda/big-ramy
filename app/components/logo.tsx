type Props = {
  size?: number;
};

export default function Logo({ size = 10 }: Props) {
  return (
    <div style={{ width: `${size}rem`, height: `${size}rem` }}>
      <img
        className="object-contain object-center w-full h-full"
        src="http://bigramyweb.inovaeg.com/static/media/main-logo.d37fd44b1dd3dfb263bfdd977c7cef90.svg"
        alt=""
      />
    </div>
  );
}
