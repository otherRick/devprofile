interface BandAindProps {
  top?: string;
  right?: string;
}

export const BandAind = ({ top, right }: BandAindProps) => {
  console.log(top, right);

  return (
    <div className={`relative w-36 h-24 ${right} ${top} z-20`}>
      <div
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.02)' }}
        className=' absolute w-full h-full bg-white bg-opacity-30 rotate-[-20deg] rounded-4xl right-0 top-0 '
      />
      <div
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.04)' }}
        className='w-36 h-24 bg-white relative rounded-4xl bg-opacity-30 rotate-[-20deg] left-4 top-4 '
      >
        <div
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.04)' }}
          className='opacity-30 absolute inset-0 bg-[radial-gradient(circle,white_1px,transparent_1.5px)] bg-[length:10px_10px] rounded-4xl'
        />
      </div>
    </div>
  );
};
