describe("artGallery", () => {

    describe("addArtwork", () => {

        it("Title and artist should be non-empty strings, and all parameters must be strings", () => {
            expect(() => artGallery.addArtwork('', '30 x 40', 'Van Gogh')).to.throw('Invalid Information!');
            expect(() => artGallery.addArtwork('', {}, 'Van Gogh')).to.throw('Invalid Information!');
            expect(() => artGallery.addArtwork('', -0.5, 'Van Gogh')).to.throw('Invalid Information!');
            expect(() => artGallery.addArtwork(123, '30 x 40', 'Van Gogh')).to.throw('Invalid Information!');
            expect(() => artGallery.addArtwork(-100, '30 x 40', {})).to.throw('Invalid Information!');
            expect(() => artGallery.addArtwork(['title'], '30 x 40', 'Van Gogh')).to.throw('Invalid Information!');
        });

        it('Dimensions should be in the format "width x height"', () => {
            expect(() => artGallery.addArtwork('Starry Night', '', 'Van Gogh')).to.throw("Invalid Dimensions!");
            expect(() => artGallery.addArtwork('Starry Night', '30 x -40', 'Van Gogh')).to.throw("Invalid Dimensions!");
            expect(() => artGallery.addArtwork('Starry Night', '30 x 40', 'Van Mei')).to.throw("Invalid Dimensions!");
            expect(() => artGallery.addArtwork('Starry Night', '30 x 0.5', 'Van Gogh')).to.throw("Invalid Dimensions!");
            expect(() => artGallery.addArtwork('Starry Night', '-30 x 40', 'Van Gogh')).to.throw("Invalid Dimensions!");
        });

        it("If the artist is not one of Van Gogh, Picasso, Monet", () => {
            expect(() => artGallery.addArtwork('Title', '30 x 40', 'Bach')).to.throw("This artist is not allowed in the gallery!");
            expect(() => artGallery.addArtwork('Title', '30 x 40', 'Van Mei')).to.throw("This artist is not allowed in the gallery!");
            expect(() => artGallery.addArtwork('Title', '30 x 40', 'Pablo Picasso')).to.throw("This artist is not allowed in the gallery!");
        });

        it("Meets the requirements", () => {
            let title = 'Starry Night';
            let artist = 'Van Gogh';
            let dimensions = '30 x 40';
            expect(artGallery.addArtwork(title, dimensions, artist)).to.equal(`Artwork added successfully: '${title}' by ${artist} with dimensions ${dimensions}.`);
        });

    });

    describe("calculateCosts", () => {

        it("ExhibitionCosts and insuranceCosts should be positive numbers.", () => {
            expect(() => artGallery.calculateCosts(-5, -0.8, false)).to.throw("Invalid Information!");
            expect(() => artGallery.calculateCosts(-0.9, 0, false)).to.throw("Invalid Information!");
            expect(() => artGallery.calculateCosts({}, 0, false)).to.throw("Invalid Information!");
            expect(() => artGallery.calculateCosts(5, 'Hello', true)).to.throw("Invalid Information!");
            expect(() => artGallery.calculateCosts(null, 0, true)).to.throw("Invalid Information!");
            expect(() => artGallery.calculateCosts(undefined, 0, true)).to.throw("Invalid Information!");
        });

        it("Sponsor should be a boolean.", () => {
            expect(() => artGallery.calculateCosts(5, 100, undefined)).to.throw("Invalid Information!");
            expect(() => artGallery.calculateCosts(5, 100, null)).to.throw("Invalid Information!");
            expect(() => artGallery.calculateCosts(10, 100, 170)).to.throw("Invalid Information!");
            expect(() => artGallery.calculateCosts(5, 100, 'true')).to.throw("Invalid Information!");
            expect(() => artGallery.calculateCosts(5, 100, [])).to.throw("Invalid Information!");
            expect(() => artGallery.calculateCosts(5, 100, {})).to.throw("Invalid Information!");
        });

        it("Calculate 10% discount if true", () => {
            let exhibitionCost = 10;
            let insuranceCost = 100;
            let totalCost = exhibitionCost + insuranceCost;
            let discountedCost = totalCost * 0.9;

            expect(artGallery.calculateCosts(exhibitionCost, insuranceCost, true)).to.equal(`Exhibition and insurance costs are ${discountedCost}$, reduced by 10% with the help of a donation from your sponsor.`);
        });

        it("If sponsor is false", () => {
            let exhibitionCost = 10;
            let insuranceCost = 100;
            let totalCost = exhibitionCost + insuranceCost;

            expect(artGallery.calculateCosts(exhibitionCost, insuranceCost, false)).to.equal(`Exhibition and insurance costs are ${totalCost}$.`);
        });

    });

    describe("organizeExhibits", () => {

        it("If any parameter is not a number or is negative, throw an error:", () => {
            expect(() => artGallery.organizeExhibits(10, '')).to.throw("Invalid Information!");
            expect(() => artGallery.organizeExhibits([], 1)).to.throw("Invalid Information!");
            expect(() => artGallery.organizeExhibits(-5, 5)).to.throw("Invalid Information!");
            expect(() => artGallery.organizeExhibits(-0.5, 100)).to.throw("Invalid Information!");
            expect(() => artGallery.organizeExhibits(10, true)).to.throw("Invalid Information!");
            expect(() => artGallery.organizeExhibits(null, 1)).to.throw("Invalid Information!");
            expect(() => artGallery.organizeExhibits(74, undefined)).to.throw("Invalid Information!");
            expect(() => artGallery.organizeExhibits(74, {})).to.throw("Invalid Information!");
            expect(() => artGallery.organizeExhibits("Hey", 4)).to.throw("Invalid Information!");
        });

        it("by dividing artworksCount by displaySpacesCount and rounding down - less than 5", () => {
            expect(artGallery.organizeExhibits(10, 5)).to.equal(`There are only ${Math.floor(10 / 5)} artworks in each display space, you can add more artworks.`);
            expect(artGallery.organizeExhibits(6, 2)).to.equal(`There are only ${Math.floor(6 / 2)} artworks in each display space, you can add more artworks.`);
        });

        it("by dividing artworksCount by displaySpacesCount and rounding down - more than 5", () => {
            expect(artGallery.organizeExhibits(100, 5)).to.equal(`You have ${5} display spaces with ${Math.floor(100 / 5)} artworks in each space.`);
            expect(artGallery.organizeExhibits(68, 5)).to.equal(`You have ${5} display spaces with ${Math.floor(68 / 5)} artworks in each space.`);
        });

    });

});
let retailer = new RefurbishedSmartphones('SecondLife Devices');
console.log(retailer.addSmartphone('Samsung S20 Ultra', 256, 1000, 'good'));
console.log(retailer.addSmartphone('Iphone 12 mini', 128, 800, 'perfect'));
console.log(retailer.addSmartphone('', 512, 1900, 'good'));
