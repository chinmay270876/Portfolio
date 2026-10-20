export function MissingAsset({ filename, alt, className = '' }) {
  return (
    <div
      className={`asset-missing ${className}`.trim()}
      role="img"
      aria-label={`${alt} (original file ${filename} was not recovered)`}
    >
      <span>
        {alt}
        <br />
        Original file not recovered: {filename}
      </span>
    </div>
  );
}
