import Icon from "@/@components/core/Icon/Icon";

export default function Home() {
  return (
    <div className="relative">
      {/* Full width background */}
      {/* <div className="bg-gradient-to-b from-black to-blue-900 h-[400px] w-full absolute top-0 left-0"></div> */}
      {/* <div className="bg-gradient-to-br from-black to-blue-900 h-[400px] w-full absolute top-0 left-0"></div> */}
      <div className="bg-gradient-to-br from-black to-blue-900 h-[400px] w-full absolute top-0 left-0"></div>

      {/* Content container */}
      <div className="max-w-[1200px] mx-auto relative z-10 pt-[464px]">
        {" "}
        {/* 400px bg + 64px margin */}
        <div className="absolute top-[150px] right-0">
          {" "}
          {/* Adjust top position to overlap the bg */}
          <Icon name="delete" variant="outlined" size={150} className="text-red-400" />
        </div>
        <h1>sdofposdfposdpf</h1>
        <h1>sdofposdfposdpf</h1>
        <h1>sdofposdfposdpf</h1>
        <h1>sdofposdfposdpf</h1>
      </div>
    </div>
  );
}
