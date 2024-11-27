import Image from 'next/image';
import React from 'react';

const Hero = () => {
  return (
    <section className="w-[1440px] h-[4370px] mb-[134px] bg-white">
      {/* Hero Header */}
      <div className='w-[1440px] h-[663px] absolute top-[134px] bg-[#F2F0F1]'>
        
      <div className="w-[577px] h-[173px] inset-y-[237px]  ml-[100px] 
        flex flex-col justify-center items-center">
        <h1 className="text-6xl font-extrabold mt-[400px] leading-[64px] ml-[20px] align-bottom  underline-offset-auto no-underline">
          FIND CLOTHES THAT MATCHES YOUR STYLE
        </h1>
        <p className="text-lg text-gray-600 ml-[20px] mt-5">
        Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style..
        </p>
      </div>

        <div className='w-52 h-13 absolute inset-x-[70px] mt-[339px] ml-10 bg-black text-white rounded-[62px]'>
         <button className='pt-4 pr-[54px] pb-4 pl-[54px] gap-3  '>Shop Now</button>
        </div>

      <div className='w-[390px] h-[448px] ml-[790px]'>
      <Image 
      src="/couple.png"
      alt='Couple'
      width={390}
      height={448} className='h-[548px] absolute -bottom-0 bg-[#F2F0F1] '/>
      </div>
      <div className="ml-[670px] absolute top-[257px] z-10">
  <Image
    src="/Vector (1).png"
    alt="Vector"
    height={56}
    width={56}
    />
</div>

<div className="ml-[1245px] absolute top-[150px] z-10">
  <Image
    src="/Vector (1).png"
    alt="Vector"
    height={104}
    width={104}/>
</div>
<div className='inset-y-[607px] ml-[100px] gap-8'>
<Image 
    src={"/Frame 57.png"}
    alt='Frame 57'
    width={596}
    height={74}
    ></Image>
</div>
<div className='index-y-[797px]'>
  <Image 
      src={"/Rectangle 3 (2).png"}
      alt='Rectangle 3'
      width={1440}
     height={122}>
</Image>
</div>
<div className='absolute top-[741px] ml-[100px]'>
  <Image 
      src={'/Vector .png'}
      alt='Vector'
      width={166.48}
      height={33.16}>
</Image>
</div>

<div className='absolute top-[735px] ml-[372.48px]'>
  <Image 
      src={"/zara-logo-1 1.png"}
      alt='Zara'
      height={38}
      width={91}>
  </Image>
</div>
      
<div className='absolute top-[741px] ml-[569.48px]'>
  <Image 
      src={"/gucci-logo-1 1.png"}
      alt='Gucci'
      height={36}
      width={156}>
  </Image>
</div>

<div className='absolute top-[741px] ml-[831.48px]'>
  <Image 
      src={"/prada-logo-1 1.png"}
      alt='Group 4'
      width={194}
      height={32}>
  </Image>
</div>


<div className='absolute top-[741px] ml-[1181.48px]'>
  <Image 
      src={"/Group (4).png"}
      alt='Group 4'
      width={206.79}
      height={33.35}>
  </Image>
</div>
</div>

         {/*Top Selling section*/}
 <div className='absolute top-[991px] ml-[518px]'>
  <Image 
      src={"/NEW ARRIVALS.png"}
      alt='New Arrivals'
      width={403}
      height={58}></Image>
 </div>
              {/*New Arrivals Section*/}

              {/*Image 1 */}

 <div className='absolute top-[1104px] ml-[100px] rounded-[20px]'>
  <Image 
      src={"/Frame 32 (1).png"}
      alt='Black Shirt'
      width={295}
      height={298}>
  </Image>
 </div>
                {/*Image 2*/}
 <div className='absolute top-[1104px] ml-[415px] rounded-[20px]'>
  <Image 
      src={"/Frame 33 (1).png"}
      alt='paintee'
      width={295}
      height={298}>
  </Image>
 </div>
              {/*Image 3 */}

 <div className='absolute top-[1104px] ml-[730px] rounded-[20px]'>
  <Image 
      src={"/Frame 34 (1).png"}
      alt='Check Shirt'
      width={295}
      height={298}>
  </Image>
 </div>

          {/* Image 4 */}

 <div className='absolute top-[1104px] ml-[1045px] rounded-[20px]'>
  <Image 
      src={"/Frame 38 (4).png"}
      alt='2 Color Shirt'
      width={295}
      height={298}>
  </Image>
 </div>

              {/*Clothes Naming Section*/}

              {/*Image1*/}

              <div className='absolute top-[1418px] ml-[100px]'>
  <Image 
      src={"/T-SHIRT WITH TAPE DETAILS.png"}
      alt='Shirt Naming'
      width={235}
      height={27}
      className="hover:bg-gray-300 transition">
  </Image>
 </div>

            {/* Image 2*/}

 <div className='absolute top-[1418px] ml-[415px]'>
  <Image 
      src={"/SKINNY FIT JEANS.png"}
      alt='Jeans'
      width={150}
      height={27}
      className="hover:bg-gray-300 transition">
  </Image>
 </div>

               {/* Image 3*/}

 <div className='absolute top-[1418px] ml-[730px]'>
  <Image 
      src={"/CHECKERED SHIRT.png"}
      alt='Shirt Naming'
      width={151}
      height={27}
      className="hover:bg-gray-300 transition">
  </Image>
 </div>

           {/* Image 4 */}

 
           <div className='absolute top-[1418px] ml-[1045px]'>
  <Image 
      src={"/SLEEVE STRIPED T-SHIRT.png"}
      alt='Shirt Naming'
      width={199}
      height={27}
      className="hover:bg-gray-300 transition">
  </Image>
 </div>

                {/*Rating Section*/}

 <div className='absolute top-[1453px] ml-[100px] gap-[13px]'>
  <Image 
      src={"/Frame 35.png"}
      alt='Shirt Naming'
      width={150}
      height={19}
      className="hover:bg-blue-300 transition">
  </Image>
 </div>

 <div className='absolute top-[1453px] ml-[415px] gap-[13px]'>
  <Image 
      src={"/Frame 39.png"}
      alt='Jeans'
      width={126.2}
      height={19}
      className="hover:bg-blue-300 transition">
  </Image>
 </div>

 <div className='absolute top-[1453px] ml-[730px] gap-[13px]'>
  <Image 
      src={"/Frame 40.png"}
      alt='Shirt Naming'
      width={150}
      height={19}
      className="hover:bg-blue-300 transition">
  </Image>
 </div>

 <div className='absolute top-[1453px] ml-[1045px] gap-[13px]'>
  <Image 
      src={"/Frame 41.png"}
      alt='Shirt Naming'
      width={150}
      height={19}
      className="hover:bg-blue-300 transition">
  </Image>
 </div>

<div className='absolute top-[1480px] ml-[100px] gap-[10px]'>
  <Image 
      src={"/Frame 58 (2).png"}
      alt='Price'
      width={55}
      height={32}
      className="hover:bg-pink-300 transition">
  </Image>
</div>

<div className='absolute top-[1480px] ml-[415px] gap-[10px]'>
  <Image 
      src={"/Frame 59.png"}
      alt='Rate'
      width={200}
      height={32}
      className="hover:bg-pink-300 transition">
  </Image>
</div>

<div className='absolute top-[1480px] ml-[415px] gap-[10px]'>
  <Image 
      src={"/Frame 59.png"}
      alt='Rate'
      width={200}
      height={32}
      className="hover:bg-pink-300 transition">
  </Image>
</div>

<div className='absolute top-[1480px] ml-[730px] gap-[10px]'>
  <Image 
      src={"/$180.png"}
      alt='Rate'
      width={56}
      height={32}
      className="hover:bg-pink-300 transition">
  </Image>
</div>

<div className='absolute top-[1480px] ml-[1045px] gap-[10px]'>
  <Image 
      src={"/Frame 44.png"}
      alt='Rate'
      width={56}
      height={32}
      className="hover:bg-blue-300 transition">
  </Image>
</div>

<div className='absolute top-[1664px] ml-[100px] border-[1px] rotate-0 bg-[#0000001A]'>
  <Image src={"/Line 4.png"}
         alt='Line 4'
         width={1240}
         height={0}>
</Image>
</div>

                    {/*Top Selling Section*/}

<div className='absolute top-[1728px] ml-[546px] border-[1px] rotate-0 bg-[#0000001A]'>
  <Image src={"/top selling.png"}
         alt='Line 4'
         width={346}
         height={58}>
</Image>
</div>

<div className='absolute top-[1841px] ml-[100px] rounded-[20px] '>
<Image 
      src="/Frame 32.png"
      alt='Frame32'
      width={295}
      height={298}>
</Image>
</div>

           {/*Brand#2*/}
     {/*Brand#2*/}
<div className='absolute top-[1841px] ml-[415px] rounded-[20px]'>
  <Image 
  src="/Frame 33.png"
  alt='Frame33'
  width={295}
  height={298}/>
</div>
             {/*Brand # 3*/}
<div className='absolute top-[1841px] ml-[730px] rounded-[20px]'>
  <Image 
      src={"/Frame 34.png"}
      alt='Frame34'
      width={295}
      height={298}/>
</div>
 
          {/*Brand # 4 */}

<div className='absolute top-[1841px] ml-[1045px] rounded-[20px]'>
  <Image 
      src="/Frame 38.png"
      alt='Frame38'
      width={295}
      height={298}/>
 
</div>


<div className='absolute top-[2155px] ml-[100px] rounded-[20px] '>
<Image 
      src="/Vertical Striped Shirt.png"
      alt='V Shirt'
      width={226}
      height={27}
      className="hover:bg-gray-300 transition">
</Image>
</div>

           {/*Brand#2*/}
     {/*Brand#2*/}
<div className='absolute top-[2155px] ml-[415px] rounded-[20px]'>
  <Image 
  src="/COURAGE GRAPHIC T-SHIRT.png"
  alt='Frame33'
  width={226}
  height={27}
  className="hover:bg-gray-300 transition"/>  
</div>
             {/*Brand # 3*/}
<div className='absolute top-[2155px] ml-[730px] rounded-[20px]'>
  <Image 
      src={"/LOOSE FIT BERMUDA SHORTS.png"}
      alt='Shorts'
      width={226}
      height={27}
      className="hover:bg-gray-300 transition"/>
</div>
 
          {/*Brand # 4 */}

<div className='absolute top-[2155px] ml-[1045px] rounded-[20px]'>
  <Image 
      src="/FADED SKINNY JEANS.png"
      alt='Frame38'
      width={226}
      height={27}
      className="hover:bg-gray-300 transition"/>
 
</div>

<div className='absolute top-[2190px] ml-[100px] rounded-[20px] gap-[13px]'>
<Image 
      src="/Frame 35.png"
      alt='Rating'
      width={160.7}
      height={19}
      className="hover:bg-blue-300 transition">
</Image>
</div>

           {/*Brand#2*/}
     {/*Brand#2*/}
<div className='absolute top-[2190px] ml-[415px] rounded-[20px] gap-[13px]'>
  <Image 
  src="/Frame 39.png"
  alt='Frame33'
  width={160.7}
  height={19}
  className="hover:bg-blue-300 transition"/>
</div>
             {/*Brand # 3*/}
<div className='absolute top-[2190px] ml-[730px] rounded-[20px] gap-13'>
  <Image 
      src={"/Frame 40.png"}
      alt='Shorts'
      width={113.09}
      height={19}
      className="hover:bg-blue-300 transition"/>
</div>
 
          {/*Brand # 4 */}

<div className='absolute top-[2190px] ml-[1045px] rounded-[20px] gap-[13px]'>
  <Image 
      src="/Frame 41.png"
      alt='Frame41'
      width={150}
      height={19}
      className="hover:bg-blue-300 transition"/>
 
</div>
          {/*Offer Section */}
  
<div className='absolute top-[2217px] ml-[100px]'>
<Image 
      src="/$212.png"
      alt='price'
      width={53}
      height={32}
      className="hover:bg-blue-300 transition">
</Image>
</div>

           {/*OLd Price*/}    
<div className='absolute top-[2217px] ml-[163px]'>
  <Image 
  src="/$232.png"
  alt='price'
  width={56}
  height={32}
  className="hover:bg-gray-300 transition"/>
</div>

       {/*Percentage section*/}
  <div className='absolute top-[2217px] ml-[231px]'>
  <Image 
      src={"/Frame 42.png"}
      alt='Percentage'
      width={58}
      height={28}
      className="hover:bg-blue-300 transition"/>
</div>
             {/*Brand # 2*/}

<div className='absolute top-[2217px] ml-[415px] rounded-[20px] gap-13'>
  <Image 
      src={"/$145.png"}
      alt='Price'
      width={54}
      height={32}
      className="hover:bg-blue-300 transition"/>
</div>
 
          {/*Brand # 4 */}

<div className='absolute top-[2217px] ml-[730px]'>
  <Image 
      src="/$80.png"
      alt='Price'
      width={54}
      height={32}
      className="hover:bg-blue-300 transition"/>
</div>  

<div className='absolute top-[2217px] ml-[1045px]'>
  <Image 
      src="/Frame 44.png"
      alt='Price'
      width={55}
      height={32}
      className="hover:bg-blue-300 transition"/>
</div>

<div className='absolute top-[2285px] ml-[611px] rounded-[62px] border-[1px]'>
  <Image src={"/Frame 29.png"}
         alt='Frame29'
         width={218}
         height={52}
         className='hover:bg-red-800 transition'>
         
  </Image>
</div>


<div className='absolute top-[2417px] ml-[100px] rounded-[40px] bg-[#F0F0F0]'>

  <Image 
  src="/Frame 60 (1).png"
  alt='Frame 60'
  width={1239}
  height={866}/>
</div>

<div className='absolute top-[3363px] ml-[100px]'>
  <Image 
  src={"/OUR HAPPY CUSTOMERS.png"}
  alt='OHC'
  width={654}
  height={58}>
</Image>
</div>

                {/* Image Grid */}
<div className="absolute top-[3461px] ml-[100px] rounded-[20px] border-[1px]">
  <Image
        src="/Frame 22.png"
        alt="Clothing 2"
        width={400}
        height={240}/>
        </div>

        {/* Image 2 */}
        <div className="absolute top-[3461px] ml-[520px] rounded-[20px] border-[1px]">
          <Image
            src="/Frame 61.png"
            alt="Frame61"
            width={400}
            height={239.58}/>
        </div>

        {/* Image 3 */}
        <div className="absolute top-[3461px] ml-[940px] rounded-[20px] border-[1px]">
          <Image
            src="/Frame 62.png"
            alt="Frame62"
            width={400}
            height={239.58}/>
        </div>

<div className='absolute top-[3781px] ml-[-1px]'>
      <Image src={"/Rectangle 1.png"}
            alt='Rectangle1'
            width={1441}
            height={589}>
      </Image>
</div>

<div className='w-[1240px] h-[180px] absolute top-[3781px] ml-[100px] rounded-[20px] justify-between bg-black'>
  <div className='w-[551px] h-[94px] ml-[120px]'>
    <h1 className=' text-[42px] text-white leading-[48px] pt-11'>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h1>
      <Image 
        src="/Frame (3).png"
        alt="Search" 
        width={349}
        height={48}/>

<input type="text"placeholder="Enter Your Email Adress..."
        className="w-[349px] h-[48px] rounded-[62px] pt-3 pr-16 pb-3 pl-16 gap-3 ml-[645px] 
        absolute top-[41px]  hover:bg-lime-300 bg-white focus:outline-none text-black"/>

<input type="text"placeholder="Subscribe to Newsletter"
        className="w-[349px] h-[46px] rounded-[62px] pt-3 pr-16 pb-3 pl-[82px] gap-3 ml-[645px] 
                  absolute top-[101px]  hover:bg-lime-300 bg-white focus:outline-none text-black"/>

</div>
<div className ='w-[1240px] h-[180px] absolute top-[51px] ml-[790px]'>
    <Image src={"/Frame (6).png"}
           alt='Frame 6'
           width={24}
           height={24}
           className="hover:bg-red-400 transition">
          
    </Image>
</div>

<div className='gap-[35px] mt-[140px]'>
   <Image src={"/Frame 51.png"}
          alt='Frame51'
          height={177}
          width={248}>
    </Image>
  </div>
<div className='ml-[390px] absolute top-[230px] gap-26'>
  <Image src={"/Frame 47.png"}
         alt='Help Menu'
         height={177}
         width={104}>
  </Image>

</div>

<div className='ml-[590px] absolute top-[230px] gap-26'>
  <Image src={"/Frame 48.png"}
         alt='Help Menu'
         height={177}
         width={136}>
  </Image>

</div>
      
<div className='ml-[820px] absolute top-[230px] '>
  <Image src={"/Frame 52 (2).png"}
         alt='Help Menu'
         height={177}
         width={153}>
  </Image>

</div>

<div className='ml-[1045px] absolute top-[230px] '>
  <Image src={"/Frame 49.png"}
         alt='Help Menu'
         height={177}
         width={153}>
  </Image>

</div>

           
</div>    
      


    </section>
  );
};

export default Hero;
