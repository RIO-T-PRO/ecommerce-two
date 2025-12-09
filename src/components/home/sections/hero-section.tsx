const HeroSection = () => {
  return (
    <div className="grid grid-cols-2 gap-8 items-center mb-20">
      <div>
        <h1 className="text-5xl font-semibold text-text-light mb-4 leading-tight">
          Elevate Your Wardrobe with Irresistible Fashion Finds!
        </h1>
        <p className="text-text-muted text-lg mb-6">
          You will discover a world of style at ShopRiot, where fashion meets
          comfort.
        </p>
        <div className="flex items-center gap-2">
          <div className="flex -space-x-2">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxOYrA8x__3bham69-kGm2hkfZhyXPvF3wKOg56Sdv-tqRX4UzZUyFd8fI3qOJ_MNaVo_Gm5ORsESKZXx7p1T2AHnHfmvZmKWjnhA7JmyX-mAh0RE0BoEP_CIyRMxC80jvv-BMyvJHLy8DYhVnhOepisgNw_nlcs_vUa_OEYybBE43Xagh80VlYj4iE0h38NX4qlfDCwSl0v1knMHuL-XucE9NjhYYupH-wCWaULS3_XG7YiUVO5cDPwUgrla39tKbqJ_Tcdmwk-o"
              alt="Avatar 1"
              className="w-10 h-10 rounded-full border-2 border-background-dark"
            />
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxOYrA8x__3bham69-kGm2hkfZhyXPvF3wKOg56Sdv-tqRX4UzZUyFd8fI3qOJ_MNaVo_Gm5ORsESKZXx7p1T2AHnHfmvZmKWjnhA7JmyX-mAh0RE0BoEP_CIyRMxC80jvv-BMyvJHLy8DYhVnhOepisgNw_nlcs_vUa_OEYybBE43Xagh80VlYj4iE0h38NX4qlfDCwSl0v1knMHuL-XucE9NjhYYupH-wCWaULS3_XG7YiUVO5cDPwUgrla39tKbqJ_Tcdmwk-o"
              alt="Avatar 2"
              className="w-10 h-10 rounded-full border-2 border-background-dark"
            />
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxOYrA8x__3bham69-kGm2hkfZhyXPvF3wKOg56Sdv-tqRX4UzZUyFd8fI3qOJ_MNaVo_Gm5ORsESKZXx7p1T2AHnHfmvZmKWjnhA7JmyX-mAh0RE0BoEP_CIyRMxC80jvv-BMyvJHLy8DYhVnhOepisgNw_nlcs_vUa_OEYybBE43Xagh80VlYj4iE0h38NX4qlfDCwSl0v1knMHuL-XucE9NjhYYupH-wCWaULS3_XG7YiUVO5cDPwUgrla39tKbqJ_Tcdmwk-o"
              alt="Avatar 3"
              className="w-10 h-10 rounded-full border-2 border-background-dark"
            />
          </div>
          <span className="text-text-light font-semibold">80k+</span>
          <span className="text-text-muted">User Satisfied</span>
        </div>
      </div>
      <div className="rounded-xl overflow-hidden border border-gray-800">
        <img
          src="https://images.unsplash.com/photo-1489749798305-4fea3ba63d60?w=600&h=600&fit=crop"
          alt="Fashion Model"
          className="w-full h-[400px] object-cover rounded-xl"
        />
      </div>
    </div>
  );
};

export default HeroSection;
