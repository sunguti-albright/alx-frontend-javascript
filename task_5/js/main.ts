interface MajorCredits {
  credits: number;
  // brand to make it nominal
  _majorBrand: 'major';
}

interface MinorCredits {
  credits: number;
  // brand to make it nominal
  _minorBrand: 'minor';
}

function sumMajorCredits(
  subject1: MajorCredits,
  subject2: MajorCredits
): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    _majorBrand: 'major',
  };
}

function sumMinorCredits(
  subject1: MinorCredits,
  subject2: MinorCredits
): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    _minorBrand: 'minor',
  };
}
