import React from "react";

const SplitScreen: React.FC = () => {
  return (
    <div className="relative flex w-[1160px]">
      <div className=" h-[307px] relative flex-1 bg-gradient-to-r from-blue-500 to-orange-600 flex items-center justify-center !rounded-lg">
        <div className="text-center text-white">
          <h2 className="text-2xl font-bold">اجاره تجهیز میخواهی؟</h2>
          <p className="mt-4">
            اگر می‌خواهی تجهیزاتی برای خدمات خودت رزرو کنی از اینجا وارد شو.
          </p>
          <button className="mt-5 bg-orange-600 text-white px-4 py-2 rounded-full">
            اجاره تجهیز میخواهم
          </button>
        </div>
      </div>

      <div className="  h-[307px] relative flex-1 bg-gradient-to-r from-gray-100 to-orange-600 flex items-center justify-center mt-16 rounded-lg">
        <div className="text-center text-black">
          <h2 className="text-2xl font-bold">تجهیزاتت رو اجاره میدی؟</h2>
          <p className="mt-4">
            اگر می‌خواهی تجهیزاتتو اجاره بدی از اینجا وارد شو.
          </p>
          <button className="mt-5 bg-blue-700 text-white px-4 py-2 rounded-full">
            تجهیزات صنعتی دارم
          </button>
        </div>
      </div>
    </div>
  );
};

export default SplitScreen;
