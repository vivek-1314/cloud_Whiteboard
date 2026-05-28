export default function Panel() {
  return (
    <div className="fixed bottom-0 left-0 w-full flex justify-center group">

      {/* Hover zone (invisible but active) */}
      <div className="absolute bottom-0 w-full h-10 pointer-events-auto" />

      {/* Panel */}
      <div
        className="
          h-[3.4rem]
          w-[40rem]
          bg-[#4d403a]
          rounded-xl
          flex items-center justify-center
          absolute
          bottom-[-80px]
          transition-all duration-300
          group-hover:bottom-3
        "
      >
        Tools Panel
      </div>

    </div>
  );
}