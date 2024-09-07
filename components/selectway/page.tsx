import React from "react";
import styles from "./page.module.css";

const SplitScreen: React.FC = () => {
  return (
    <div className={`relative flex h-[300px] w-[1160px] rounded-lg overflow-hidden ${styles.splitScreen}`}>
      <div className={`relative flex-1 ${styles.leftSection}`}>
        <div className={`${styles.content} text-center p-5`}>
          <h2 className="text-2xl font-bold">اجاره تجهیز میخواهی؟</h2>
          <p className="mt-4">اگر می‌خواهی تجهیزاتی برای خدمات خودت رزرو کنی از اینجا وارد شو.</p>
          <button className={`mt-5 ${styles.button} bg-orange-600 text-white`}>
            اجاره تجهیز میخواهم
          </button>
        </div>
      </div>

      <div className={`relative flex-1 ${styles.rightSection}`}>
        <div className={`${styles.content} text-center p-5`}>
          <h2 className="text-2xl font-bold">تجهیزاتت رو اجاره میدی؟</h2>
          <p className="mt-4">اگر می‌خواهی تجهیزاتتو اجاره بدی از اینجا وارد شو.</p>
          <button className={`mt-5 ${styles.button} bg-blue-700 text-white`}>
            تجهیزات صنعتی دارم
          </button>
        </div>
      </div>
    </div>
  );
};

export default SplitScreen;


          // <button className="mt-5 bg-orange-600 text-white rounded-full px-5 py-2">
          // <button className="mt-5 bg-blue-700 text-white rounded-full px-5 py-2">
