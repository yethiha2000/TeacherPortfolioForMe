import React from 'react';
import profileImg from '../assets/profile.webp'; // ဆရာ့ပုံ

export default function ProfileCard() {
    // တက်ရောက်ခဲ့သော သင်တန်းများ စာရင်း
  const attendedCourses = [
    { title: "PPTT-(8/22)", provider: "ပြည်ပညာရေးဒီဂရီကောလိပ်", year:"2022" },
    ,
  ];

  const teachingClasses = [
    { grade: "Grade 5", subject: "General Subjects", room: "Room - A" }
  ];

  return (
    <div className="bg-slate-50 min-h-screen flex flex-col items-center justify-center p-6">
      
      {/* Main Card */}
      <div className="bg-white rounded-3xl shadow-[0_20px_50px_rgba(22,163,74,0.05)] p-8 max-w-sm w-full border border-slate-100 flex flex-col items-center text-center relative overflow-hidden">
        
        {/* Card ရဲ့ အပေါ်ထောင့်မှာ ကျောင်းဆရာ Theme ပေါက်အောင် အလှဆင်ထားတဲ့ အစိမ်းရောင် Gradient Aura */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-40 bg-emerald-500/10 blur-3xl rounded-full pointer-events-none" />

        {/* Premium Glow & Spin Border Component */}
        <div className="relative w-44 h-44 flex items-center justify-center mt-2">
          
          {/* ၁။ အနောက်က Glow အလင်းရောင် (လှည့်ပတ်ပြီး ဝါးတားတား တောက်နေမည့် Effect) */}
          <div 
            className="absolute w-[120%] h-[120%] animate-spin-slow blur-xl opacity-60 pointer-events-none"
            style={{
              backgroundImage: 'conic-gradient(from 0deg, #16a34a 0deg, #4ade80 90deg, transparent 180deg, #16a34a 270deg, #16a34a 360deg)'
            }}
          />

          {/* ၂။ အရှေ့က လည်နေမယ့် ပင်မ Gradient Border ဝိုင်း */}
          <div 
            className="absolute w-full h-full animate-spin-slow rounded-full"
            style={{
              backgroundImage: 'conic-gradient(from 0deg, #16a34a 0deg, #4ade80 120deg, #f8fafc 240deg, #16a34a 360deg)'
            }}
          />

          {/* ၃။ ဓာတ်ပုံအတွက် အတွင်းကွင်း (Border ထူထူလေးနဲ့ ဖြတ်ပေးထားတာပါ) */}
          <div className="absolute inset-[5px] bg-white rounded-full flex items-center justify-center overflow-hidden p-1 shadow-inner z-10">
            <div className="w-full h-full rounded-full overflow-hidden border border-slate-100">
              <img 
                src={profileImg} 
                alt="Teacher Profile" 
                className="w-full h-full object-cover scale-105 transition-transform duration-500 hover:scale-110"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1544717305-2782549b5136?w=400";
                }}
              />
            </div>
          </div>
        </div>

        {/* ဆရာ့အချက်အလက်များ */}
        <h1 className="mt-6 text-2xl font-black text-slate-800 tracking-tight">ဦးရဲသီဟ</h1>
        <div className="mt-1.5 px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-xs font-bold tracking-wide uppercase inline-block">
          လက်ထောက်မူလတန်းပြ
        </div>
        
        <hr className="w-full my-6 border-slate-100" />
        {/* တက်ရောက်ခဲ့သော သင်တန်းများ Section */}
        <div className="w-full text-left z-10 mb-6">
          <h2 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-2">
            <span>တက်ရောက်ခဲ့သော သင်တန်းများ</span>
            <span className="h-[1px] bg-slate-100 flex-1"></span>
          </h2>
          
          <div className="grid grid-cols-1 gap-2">
            {attendedCourses.map((course, index) => (
              <div 
                key={index} 
                className="p-3 bg-slate-50/70 rounded-xl border border-slate-100 flex flex-col gap-0.5 hover:bg-slate-50 transition-colors"
              >
                <h3 className="font-bold text-slate-700 text-xs leading-snug">
                  {course.title}
                </h3>
                <div className="flex justify-between items-center text-[10px] text-slate-400 font-medium">
                  <span>{course.provider}</span>
                  <span className="text-emerald-600 font-semibold">{course.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* သင်ကြားတဲ့အတန်းများ */}
        <div className="w-full text-left z-10">
          <h2 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
            <span>သင်ကြားလျက်ရှိသော အတန်းများ</span>
            <span className="h-[1px] bg-slate-100 flex-1"></span>
          </h2>
          
          <div className="space-y-3">
            {teachingClasses.map((item, index) => (
              <div 
                key={index} 
                className="group flex items-center justify-between p-4 bg-slate-50 hover:bg-emerald-50/50 rounded-2xl border border-slate-100 hover:border-emerald-100/60 transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  {/* အတန်းတစ်ခုချင်းစီရဲ့ အရှေ့က အစိမ်းရောင် အစက်လေး */}
                  <span className="w-2 h-2 rounded-full bg-emerald-500 group-hover:scale-125 transition-transform" />
                  <div>
                    <h3 className="font-bold text-slate-800 text-sm transition-colors group-hover:text-emerald-900">{item.grade}</h3>
                    <p className="text-xs font-medium text-slate-400 mt-0.5 group-hover:text-emerald-700/70">{item.subject}</p>
                  </div>
                </div>
                <span className="text-[11px] font-bold px-3 py-1.5 bg-white text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white rounded-xl shadow-xs border border-slate-100 group-hover:border-emerald-600 transition-all duration-300">
                  {item.room}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
