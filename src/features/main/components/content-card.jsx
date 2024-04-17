const ContentCard = ({ mediaData }) => {
  return (
    <div className="grid grid-cols gap-30 media-content">
      {mediaData?.map((media) => (
        <div key={media?.id} className="flex flex-col rounded-20 accentued-drop-shadow overflow-hidden">
            <img src={media?.background} className="w-full" alt="" />
          <div className="gap-10 flex flex-col p-30 mx-3">
            <p className="h5 text-center text-color">{media?.name}</p>
            <p className="small text-center second-text-color">{media?.title}</p>
            <div className="flex flex-row gap-20 justify-center">
              {media?.link?.map((icon, index) => (
                <img src={icon} key={index} />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ContentCard
