$(function () {
    var starCount = 4;
    var rating = $('.hero-section_content-info-rating');
    for (let i = 0; i < starCount; i++) {
        rating.append('<img src="images/star.svg">');
    };
    rating.append('<img src="images/star.svg" style="margin-right: 1.5%;">', 'Rated 4.8/5 (243 reviews)');

    var pro = $('.hero-section_content-info-pro span');
    pro.append('<img src="images/Checkmark.svg">');
    for (let i = 0; i < 1; i++) {
        pro[0].append("No Credit Card Required");
        pro[1].append("10 Free Templates");
    };

    const testimonialCard = [
        {
            "image": "images/User Avatar.svg",
            "name": "Sarah Andrews",
            "revenue": "$100k in revenue",
            "comment": "Setting up my portfolio with Fiber took no more than 10 minutes. Since then, my portfolio has attracted a lot of clients and made me more than $100k.",
            "button": "View Sarah's Portfolio"
        },
        {
            "image": "images/User Avatar 2.svg",
            "name": "Mathew Higgins",
            "revenue": "$20k in revenue",
            "comment": "I have been getting A LOT of leads ever since I used Fiber's premade templates, now I just need to work on my case studies and I'll be ready to go.",
            "button": "View Mathew's Portfolio"
        },
        {
            "image": "images/User Avatar 32.svg",
            "name": "Janice Dave",
            "revenue": "$30k in revenue",
            "comment": "I only started freelancing this year. I have already made more than I ever did in my full-time job. The templates are so amazing.",
            "button": "View Janice's Portfolio"
        }
    ]
    testimonialCard.map((tcard) => {
        $('.testimonial').append(`
            <div class="testimonial-card card-border slide">
                <img src="${tcard.image}" alt="User Image">
                <h5 class="testimonial-card_name">${tcard.name}</h5>
                <h6 class="testimonial-card_revenue marginbtm">${tcard.revenue}</h6>
                <p class="testimonial-card_comment marginbtm">${tcard.comment}</p>
                <a class="btn card-border bold-color" href="#">${tcard.button}</a>
            </div>`);
    });
});
