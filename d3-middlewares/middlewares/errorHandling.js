module.exports = (hata,istek,cevap,next) => {
    cevap.status(hata.hatakodu).json(hata);
};
