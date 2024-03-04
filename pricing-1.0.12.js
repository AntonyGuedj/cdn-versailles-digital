const thdev = 100;
const thdesign = 70;

let quotation = {
    home: 0,
    page: {
        count: 0,
        amount: 0
    },
    section: {
        count: 0,
        amount: 0,
        category: 0,
        listingCategory: 0
    },
    contact: {
        simpleForm: {
            count: 0,
            amount: 0
        },
        multiForm: {
            count: 0,
            amount: 0
        }
    },
    ecommerce: {
        module: 0,
        payments: {
            stripe: 0,
            applepay: 0,
            googlepay: 0,
            paypal: 0,
            total: 0
        },
        discount: 0
    },
    design: {
        amount: 0,
        template: 0,
        custom: 0
    },
    adobe: 0,
    externalTool: {
        count: 0,
        amount: 0
    },
    automatedProcess: {
        count: 0,
        amount: 0
    },
    tracking: {
        count: 0,
        amount: 0
    },
    cookie: 0,
    chatGPTText: 0,
    socialLink: 0,
    googleMaps: 0,
    totals: {
        main: {
            site: 0,
            maintain: 0
        },
        site: {
            knight: 0,
            queen: 0,
            king: 0,
        },
        maintain: {
            knight: 0,
            queen: 0,
            king: 0,
        }
    }
}

const deposites = {
    coefficient: {
        knight: 0.33,
        queen: 0.43,
        king: 0.53
    },
    amount: {
        knight: 0,
        queen: 0,
        king: 0
    }
}

let subscriptions = {
    yearly: false,
    time: 24,
    knight: 0,
    queen: 0,
    king: 0,
    selected: null
}

let discounts = {
    knight: 1,
    queen: 0.95,
    king: 0.9
}

const delay = {
    home: 14,
    page: 3.5,
    section: {
        time: 7,
        category: 1.75,
        listingCategory: 3.5
    },
    contact: {
        simpleForm: 3.5,
        multiForm: 14
    },
    ecommerce: {
        module: 28,
        stripe: 3.5,
        applepay: 3.5,
        googlepay: 3.5,
        paypal: 3.5,
        discount: 3.5
    },
    design: {
        template: {
            home: 7,
            page: 1,
            section: {
                module: 4.5,
                listingCategory: 1
            },
            contact: {
                simpleForm: 1,
                multiForm: 7
            },
            ecommerce: {
                product: 3.5,
                listing: 1,
                cart: 2,
                button: 1,
                confirmation: 1
            }
        },
        custom: {
            home: 14,
            page: 7,
            section: {
                module: 14,
                listingCategory: 3.5
            },
            contact: {
                simpleForm: 5,
                multiForm: 14
            },
            ecommerce: {
                product: 10.5,
                listing: 7,
                cart: 7,
                button: 3.5,
                confirmation: 3.5
            }
        }
    },
    externalTool: 7,
    automatedProcess: 7,
    tracking: 1,
    cookie: 3.5,
    chatGPTText: 1,
    socialLink: 1,
    googleMaps: 3.5,
    maintain: {
        0: 0,
        1: 3.5,
        3: 14
    }
}

let unityPrice = {
    home: Math.round(delay.home * thdev),
    page: Math.round(delay.page * thdev),
    section: {
        price: Math.round(delay.section.time * thdev),
        category: Math.round(delay.section.category * thdev),
        listingCategory: Math.round(delay.section.listingCategory * thdev)
    },
    contact: {
        simpleForm: Math.round(delay.contact.simpleForm * thdev),
        multiForm: Math.round(delay.contact.multiForm * thdev)
    },
    ecommerce: {
        module: Math.round(delay.ecommerce.module * thdev),
        stripe: Math.round(delay.ecommerce.stripe * thdev),
        applepay: Math.round(delay.ecommerce.applepay * thdev),
        googlepay: Math.round(delay.ecommerce.googlepay * thdev),
        paypal: Math.round(delay.ecommerce.paypal * thdev),
        discount: Math.round(delay.ecommerce.discount * thdev)
    },
    adobe: {
        0: 0,
        40: 200,
        100: 400
    },
    externalTool: Math.round(delay.externalTool * thdev),
    automatedProcess: Math.round(delay.automatedProcess * thdev),
    tracking: Math.round(delay.tracking * thdev),
    cookie: Math.round(delay.cookie * thdev),
    chatGPTText: Math.round(delay.chatGPTText * thdev),
    socialLink: Math.round(delay.socialLink * thdev),
    googleMaps: Math.round(delay.googleMaps * thdev),
    maintain: {
        0: Math.round(delay.maintain["0"] * thdev),
        1: Math.round(delay.maintain["1"] * thdev),
        3: Math.round(delay.maintain["3"] * thdev * 0.95)
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const dom = {
        form: {
            title: document.querySelector('#form-title'),
            steps: {
                current: 0,
                progress: {
                    container: document.querySelector('.form-steps'),
                    numbers: document.querySelectorAll('.step-number'),
                    texts: document.querySelectorAll('.step-text')
                },
                count: {
                    total: document.querySelectorAll('.form-step').length,
                    text: document.querySelector('#step-number')
                },
                buttons: {
                    next: document.querySelector('#next-button'),
                    previous: document.querySelector('#previous-button'),
                    reCaptcha: document.querySelector('#re-captcha'),
                    submit: document.querySelector('#submit-button')
                },
            },
            inputs: {
                counters: {
                    field: document.querySelectorAll('.counter-input'),
                    buttons: {
                        increment: document.querySelectorAll('.counter-button-increment'),
                        decrement: document.querySelectorAll('.counter-button-decrement')
                    }
                },
                quotations: {
                    homepage_count: document.querySelector('#Quotation-Homepage-Count'),
                    homepage_price: document.querySelector('#Quotation-Homepage-Price'),
                    page_count: document.querySelector('#Quotation-Page-Count'),
                    page_price: document.querySelector('#Quotation-Page-Price'),
                    section_count: document.querySelector('#Quotation-Section-Count'),
                    section_price: document.querySelector('#Quotation-Section-Price'),
                    section_category_count: document.querySelector('#Quotation-Section-Category-Count'),
                    section_category_price: document.querySelector('#Quotation-Section-Category-Price'),
                    section_category_list_count: document.querySelector('#Quotation-Section-Category-List-Count'),
                    section_category_list_price: document.querySelector('#Quotation-Section-Category-List-Price'),
                    section_simple_form_count: document.querySelector('#Quotation-Simple-Form-Count'),
                    section_simple_form_price: document.querySelector('#Quotation-Simple-Form-Price'),
                    section_multi_form_count: document.querySelector('#Quotation-Multi-Form-Count'),
                    section_multi_form_price: document.querySelector('#Quotation-Multi-Form-Price'),
                    ecommerce_count: document.querySelector('#Quotation-Ecommerce-Count'),
                    ecommerce_price: document.querySelector('#Quotation-Ecommerce-Price'),
                    stripe_count: document.querySelector('#Quotation-Stripe-Count'),
                    stripe_price: document.querySelector('#Quotation-Stripe-Price'),
                    applepay_count: document.querySelector('#Quotation-Applepay-Count'),
                    applepay_price: document.querySelector('#Quotation-Applepay-Price'),
                    googlepay_count: document.querySelector('#Quotation-Googlepay-Count'),
                    googlepay_price: document.querySelector('#Quotation-Googlepay-Price'),
                    paypal_count: document.querySelector('#Quotation-Paypal-Count'),
                    paypal_price: document.querySelector('#Quotation-Paypal-Price'),
                    reduction_count: document.querySelector('#Quotation-Reduction-Count'),
                    reduction_price: document.querySelector('#Quotation-Reduction-Price'),
                    design_type: document.querySelector('#Quotation-Design-Type'),
                    design_price: document.querySelector('#Quotation-Design-Price'),
                    adobe_type: document.querySelector('#Quotation-Adobe-Type'),
                    adobe_price: document.querySelector('#Quotation-Adobe-Price'),
                    externaltool_count: document.querySelector('#Quotation-Externaltool-Count'),
                    externaltool_price: document.querySelector('#Quotation-Externaltool-Price'),
                    automated_count: document.querySelector('#Quotation-Automated-Count'),
                    automated_price: document.querySelector('#Quotation-Automated-Price'),
                    tracking_count: document.querySelector('#Quotation-Tracking-Count'),
                    tracking_price: document.querySelector('#Quotation-Tracking-Price'),
                    cookie_count: document.querySelector('#Quotation-Cookie-Count'),
                    cookie_price: document.querySelector('#Quotation-Cookie-Price'),
                    chatgpttext_count: document.querySelector('#Quotation-Chatgpttext-Count'),
                    chatgpttext_price: document.querySelector('#Quotation-Chatgpttext-Price'),
                    social_count: document.querySelector('#Quotation-Social-Count'),
                    social_price: document.querySelector('#Quotation-Social-Price'),
                    maps_count: document.querySelector('#Quotation-Maps-Count'),
                    maps_price: document.querySelector('#Quotation-Maps-Price'),
                    yearly: document.querySelector('#Quotation-Yearly'),
                    pack: document.querySelector('#Quotation-Pack'),
                    maintain_type: document.querySelector('#Quotation-Maintain-Count'),
                    maintain_total: document.querySelector('#Quotation-Maintain-Total'),
                    maintain_discount: document.querySelector('#Quotation-Maintain-Discount'),
                    maintain_pack: document.querySelector('#Quotation-Maintain-Pack'),
                    site_total: document.querySelector('#Quotation-Site-Total'),
                    site_discount: document.querySelector('#Quotation-Site-Discount'),
                    site_pack: document.querySelector('#Quotation-Site-Pack'),
                    delay: document.querySelector('#Quotation-Delay'),
                    deposite: document.querySelector('#Quotation-Deposite'),
                    subscription: document.querySelector('#Quotation-Subscription'),
                }
            },
            checkboxes: document.querySelectorAll('input[type="checkbox"][data-type="checkbox"]'),
            radios: document.querySelectorAll('input[type="radio"][data-type="radio"]'),
            toggles: {
                price: document.querySelector('#toggle-component')
            },
            home: {
                label: document.querySelector('#home-price'),
                resum: {
                    container: document.querySelector('#pricing-home'),
                    price: document.querySelector('#pricing-home-price'),
                    text: document.querySelector('#pricing-home-text')
                },
            },
            page: {
                label: document.querySelector('#page-price'),
                resum: {
                    container: document.querySelector('#pricing-page'),
                    price: document.querySelector('#pricing-page-price'),
                    text: document.querySelector('.pricing-number-pages')
                }
            },
            section: {
                label: document.querySelector('#rubrique-price'),
                resum: {
                    container: document.querySelector('#pricing-rubrique'),
                    price: document.querySelector('#pricing-rubrique-price'),
                    text: document.querySelector('.pricing-number-rubrique')
                },
                category: {
                    label: document.querySelector('#rubrique-category-price'),
                    resum: {
                        container: document.querySelector('#pricing-category'),
                        price: document.querySelector('#pricing-category-price'),
                    }
                },
                listingCategory: {
                    label: document.querySelector('#rubrique-categories-list-price'),
                    resum: {
                        container: document.querySelector('#pricing-category-page'),
                        price: document.querySelector('#pricing-category-page-price'),
                    }
                }
            },
            contact: {
                simpleForm: {
                    label: document.querySelector('#simple-form-price'),
                    resum: {
                        container: document.querySelector('#pricing-simple-form'),
                        price: document.querySelector('#pricing-simple-form-price'),
                        text: document.querySelector('.pricing-number-contact')
                    }
                },
                multiForm: {
                    label: document.querySelector('#multi-form-price'),
                    resum: {
                        container: document.querySelector('#pricing-multi-form'),
                        price: document.querySelector('#pricing-multi-form-price'),
                        text: document.querySelector('.pricing-number-contact-multi')
                    }
                }
            },
            ecommerce: {
                module: {
                    label: document.querySelector('#e-commerce-price'),
                    resum: {
                        container: document.querySelector('#pricing-ecommerce'),
                        price: document.querySelector('#pricing-ecommerce-price'),
                    }
                },
                stripe: {
                    label: document.querySelector('#stripe-price'),
                    resum: {
                        container: document.querySelector('#pricing-stripe'),
                        price: document.querySelector('#pricing-stripe-price'),
                    }
                },
                applepay: {
                    label: document.querySelector('#apple-pay-price'),
                    resum: {
                        container: document.querySelector('#pricing-apple-pay'),
                        price: document.querySelector('#pricing-apple-pay-price'),
                    }
                },
                googlepay: {
                    label: document.querySelector('#google-pay-price'),
                    resum: {
                        container: document.querySelector('#pricing-google-pay'),
                        price: document.querySelector('#pricing-google-pay-price'),
                    }
                },
                paypal: {
                    label: document.querySelector('#paypal-price'),
                    resum: {
                        container: document.querySelector('#pricing-paypal'),
                        price: document.querySelector('#pricing-paypal-price'),
                    }
                },
                discount: {
                    label: document.querySelector('#discount-coupon-price'),
                    resum: {
                        container: document.querySelector('#pricing-discount'),
                        price: document.querySelector('#pricing-discount-price'),
                    }
                }
            },
            design: {
                template: {
                    label: document.querySelector('#template-webflow-price'),
                    resum: {
                        container: document.querySelector('#pricing-template'),
                        price: document.querySelector('#pricing-template-price'),
                    }
                },
                custom: {
                    label: document.querySelector('#custom-design-price'),
                    resum: {
                        container: document.querySelector('#pricing-design'),
                        price: document.querySelector('#pricing-design-price'),
                    }
                }
            },
            adobe: {
                40: {
                    label: document.querySelector('#adobe-stock-40-price'),
                    resum: {
                        container: document.querySelector('#pricing-adobe-40'),
                        price: document.querySelector('#pricing-adobe-40-price'),
                    }
                },
                100: {
                    label: document.querySelector('#adobe-stock-100-price'),
                    resum: {
                        container: document.querySelector('#pricing-adobe-100'),
                        price: document.querySelector('#pricing-adobe-100-price'),
                    }
                }
            },
            externalTool: {
                label: document.querySelector('#external-tools-price'),
                resum: {
                    container: document.querySelector('#pricing-external-tool'),
                    price: document.querySelector('#pricing-external-tool-price'),
                    text: document.querySelector('.pricing-number-external-tools')
                }
            },
            automatedProcess: {
                label: document.querySelector('#automated-process-price'),
                resum: {
                    container: document.querySelector('#pricing-auto-process'),
                    price: document.querySelector('#pricing-auto-process-price'),
                    text: document.querySelector('.pricing-number-auto-process')
                }
            },
            tracking: {
                label: document.querySelector('#tracking-service-price'),
                resum: {
                    container: document.querySelector('#pricing-tracking'),
                    price: document.querySelector('#pricing-tracking-price'),
                    text: document.querySelector('.pricing-number-tracking')
                }
            },
            cookie: {
                label: document.querySelector('#cookie-consent-price'),
                resum: {
                    container: document.querySelector('#pricing-cookie'),
                    price: document.querySelector('#pricing-cookie-price'),
                }
            },
            chatGPTText: {
                label: document.querySelector('#chatgpt-text-price'),
                resum: {
                    container: document.querySelector('#pricing-chatgpt'),
                    price: document.querySelector('#pricing-chatgpt-price'),
                }
            },
            socialLink: {
                label: document.querySelector('#social-media-links-price'),
                resum: {
                    container: document.querySelector('#pricing-social'),
                    price: document.querySelector('#pricing-social-price'),
                }
            },
            googleMaps: {
                label: document.querySelector('#google-maps-price'),
                resum: {
                    container: document.querySelector('#pricing-maps'),
                    price: document.querySelector('#pricing-maps-price'),
                }
            },
            maintain: {
                0: {
                    label: document.querySelector('#maintain-0-price')
                },
                1: {
                    label: document.querySelector('#maintain-1-price'),
                    resum: {
                        container: document.querySelector('#pricing-maintain-1'),
                        price: document.querySelector('#pricing-maintain-1-price'),
                    }
                },
                3: {
                    label: document.querySelector('#maintain-3-price'),
                    resum: {
                        container: document.querySelector('#pricing-maintain-3'),
                        price: document.querySelector('#pricing-maintain-3-price'),
                    }
                }
            },
            footer: document.querySelector('#footer')
        },
        pricing: {
            totals: {
                main: document.querySelector('.total-price'),
                knight: document.querySelector('.total-knight'),
                queen: document.querySelector('.total-queen'),
                king: document.querySelector('.total-king'),
            },
            deposites: {
                knight: document.querySelector('#deposite-sub-knight'),
                queen: document.querySelector('#deposite-sub-queen'),
                king: document.querySelector('#deposite-sub-king')
            },
            subscriptions: {
                months: document.querySelectorAll('.sub-months'),
                knight: document.querySelector('#sub-knight'),
                queen: document.querySelector('#sub-queen'),
                king: document.querySelector('#sub-king')
            },
            maintain: {
                delays: document.querySelectorAll('.maintain-delay'),
                knight: {
                    container: document.querySelector('.maintain-knight'),
                    text: document.querySelector('.maintain-price-knight')
                },
                queen: {
                    container: document.querySelector('.maintain-queen'),
                    text: document.querySelector('.maintain-price-queen')
                },
                king: {
                    container: document.querySelector('.maintain-king'),
                    text: document.querySelector('.maintain-price-king')
                }
            },
            discounts: {
                wrappers: {
                    maintains: document.querySelectorAll('.discount-maintain'),
                },
                knight: {
                    site: {
                        container: document.querySelector('.discount-knight-wrapper.site'),
                        text: document.querySelector('.discount-knight')
                    },
                    maintain: {
                        container: document.querySelector('.discount-knight-wrapper.maintain'),
                        text: document.querySelector('.discount-knight-maintain')
                    },
                    noDiscount: document.querySelector('#no-discount')
                },
                queen: {
                    site: {
                        container: document.querySelector('.discount-queen')
                    },
                    maintain: {
                        container: document.querySelector('.discount-queen-maintain')
                    }
                },
                king: {
                    site: {
                        container: document.querySelector('.discount-king')
                    },
                    maintain: {
                        container: document.querySelector('.discount-king-maintain')
                    }
                }
            },
            deadlines: document.querySelectorAll('.deadlines')
        }
    }
    
    dom.form.title.classList.remove('display-none');
    definePriceLabels();
    defineDefaultInputsValue();
    
    dom.form.steps.buttons.next.addEventListener('click', function () {
        dom.form.steps.current++;
        
        if (dom.form.steps.current > 1) {
            dom.form.footer.classList.remove('display-none');
        } else {
            dom.form.footer.classList.add('display-none');
        }
        
        if (dom.form.steps.current < 10) {
            dom.form.steps.buttons.submit.classList.add('display-none');
            dom.form.steps.buttons.reCaptcha.classList.add('display-none');
        } else {
            dom.form.steps.buttons.submit.classList.remove('display-none');
            dom.form.steps.buttons.reCaptcha.classList.remove('display-none');
        }
        
        updateFormSteps();
    });
    
    dom.form.steps.buttons.previous.addEventListener('click', function () {
        dom.form.steps.current--;
        
        if (dom.form.steps.current < 2) {
            dom.form.footer.classList.add('display-none');
        } else {
            dom.form.footer.classList.remove('display-none');
        }
        
        if (dom.form.steps.current < 10) {
            dom.form.steps.buttons.submit.classList.add('display-none');
            dom.form.steps.buttons.reCaptcha.classList.add('display-none');
        } else {
            dom.form.steps.buttons.submit.classList.remove('display-none');
            dom.form.steps.buttons.reCaptcha.classList.remove('display-none');
        }
        
        updateFormSteps();
    });
    
    dom.form.inputs.counters.buttons.increment.forEach(function (btn, id) {
        btn.addEventListener('click', function () {
            let input = dom.form.inputs.counters.field[id]
            incrementValue(input);
            
            let parent = input.parentNode;
            if (parent.classList.contains('switch')) {
                showAssociatedContents(input, parseInt(input.value));
            }
            
            calculateCount(dom.form.inputs.counters.field[id]);
        });
    });
    
    dom.form.inputs.counters.buttons.decrement.forEach(function (btn, id) {
        btn.addEventListener('click', function () {
            let input = dom.form.inputs.counters.field[id];
            decrementValue(input);
            
            let parent = input.parentNode;
            if (parent.classList.contains('switch')) {
                showAssociatedContents(input, parseInt(input.value));
            }
            
            calculateCount(dom.form.inputs.counters.field[id]);
        });
    });
    
    dom.form.checkboxes.forEach(function (checkbox) {
        checkbox.addEventListener('change', function () {
            let service = this.getAttribute('data-service');
            
            let parent = checkbox.parentNode;
            if (parent.classList.contains('switch')) {
                showAssociatedContents(checkbox, checkbox.checked);
            }
            
            calculateCheckbox(service, this.checked);
        });
    });
    
    dom.form.radios.forEach(function (radio) {
        radio.addEventListener('change', function () {
            const service = this.getAttribute('data-service');
            let value = this.value;
            
            calculateRadio(service, value);
        });
    });
    
    dom.form.toggles.price.addEventListener('click', function () {
        subscriptions.yearly = !subscriptions.yearly;
        subscriptions.time = subscriptions.yearly ? 12 : 24;
        discounts.knight = subscriptions.yearly ? 0.95 : 1;
        discounts.queen = subscriptions.yearly ? 0.9 : 0.95;
        discounts.king = subscriptions.yearly ? 0.85 : 0.9;
        dom.form.inputs.quotations.yearly.value = subscriptions.time;
        calculateRadio('subscription', subscriptions.selected);
    });
    
    dom.form.steps.buttons.submit.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    });
    
    function definePriceLabels() {
        dom.form.home.label.textContent = unityPrice.home.toString();
        dom.form.page.label.textContent = unityPrice.page.toString();
        dom.form.section.label.textContent = unityPrice.section.price.toString();
        dom.form.section.category.label.textContent = unityPrice.section.category.toString();
        dom.form.section.listingCategory.label.textContent = unityPrice.section.listingCategory.toString();
        dom.form.contact.simpleForm.label.textContent = unityPrice.contact.simpleForm.toString();
        dom.form.contact.multiForm.label.textContent = unityPrice.contact.multiForm.toString();
        dom.form.ecommerce.module.label.textContent = unityPrice.ecommerce.module.toString();
        dom.form.ecommerce.stripe.label.textContent = unityPrice.ecommerce.stripe.toString();
        dom.form.ecommerce.applepay.label.textContent = unityPrice.ecommerce.applepay.toString();
        dom.form.ecommerce.googlepay.label.textContent = unityPrice.ecommerce.googlepay.toString();
        dom.form.ecommerce.paypal.label.textContent = unityPrice.ecommerce.paypal.toString();
        dom.form.ecommerce.discount.label.textContent = unityPrice.ecommerce.discount.toString();
        dom.form.adobe["40"].label.textContent = unityPrice.adobe["40"].toString();
        dom.form.adobe["100"].label.textContent = unityPrice.adobe["100"].toString();
        dom.form.externalTool.label.textContent = unityPrice.externalTool.toString();
        dom.form.automatedProcess.label.textContent = unityPrice.automatedProcess.toString();
        dom.form.tracking.label.textContent = unityPrice.tracking.toString();
        dom.form.cookie.label.textContent = unityPrice.cookie.toString();
        dom.form.chatGPTText.label.textContent = unityPrice.chatGPTText.toString();
        dom.form.socialLink.label.textContent = unityPrice.socialLink.toString();
        dom.form.googleMaps.label.textContent = unityPrice.googleMaps.toString();
        dom.form.maintain["1"].label.textContent = unityPrice.maintain["1"].toString();
        dom.form.maintain["3"].label.textContent = unityPrice.maintain["3"].toString();
    }
    
    function defineDefaultInputsValue() {
        for (let key in dom.form.inputs.quotations) {
            dom.form.inputs.quotations[key].value = 0;
        }
        
        dom.form.inputs.quotations.yearly.value = 24;
    }
    
    function updateFormSteps() {
        if (dom.form.steps.current > 0) {
            dom.form.steps.progress.container.classList.remove('display-none');
        } else {
            dom.form.steps.progress.container.classList.add('display-none');
        }
        
        dom.form.steps.progress.numbers.forEach(function (number) {
            number.classList.add('step-off');
        });
        
        dom.form.steps.progress.texts.forEach(function (text) {
            text.classList.add('step-off');
        });
        
        for (let i = 0; i < dom.form.steps.current; i++) {
            if (i < dom.form.steps.current) {
                document.querySelector('#step-number-' + i).classList.remove('step-off');
                document.querySelector('#step-text-' + i).classList.remove('step-off');
            }
        }
    }
    
    function incrementValue(input) {
        let value = parseInt(input.value);
        input.value = isNaN(value) ? 1 : value + 1;
    }
    
    function decrementValue(input) {
        let value = parseInt(input.value);
        input.value = isNaN(value) || value <= 0 ? 0 : value - 1;
    }
    
    function showAssociatedContents(element, value) {
        let wrapper = element.closest('.form-step-grid');
        let toSwitchs = wrapper.querySelectorAll('.to-switch');
        
        toSwitchs.forEach(function (toSwitch) {
            if (value) {
                toSwitch.classList.remove('display-none');
            } else {
                toSwitch.classList.add('display-none');
                
                let checkboxes = toSwitch.querySelectorAll('input[type=checkbox]');
                let buttons = toSwitch.querySelectorAll('.w-checkbox-input');
                if (checkboxes.length) {
                    checkboxes.forEach(function (checkbox) {
                        checkbox.checked = false;
                        
                        let service = checkbox.getAttribute('data-service');
                        calculateCheckbox(service, false);
                    });
                    
                    buttons.forEach(function (button) {
                        button.classList.remove('w--redirected-checked');
                    });
                }
                
                let input = toSwitch.querySelector('input[type=number]');
                if (input) {
                    input.value = 0;
                    calculateCount(input);
                }
            }
        });
    }
    
    function calculateCount(input) {
        const counter = input.getAttribute('data-service');
        const count = Math.round(input.value);
        
        if (counter === 'number-of-pages') {
            quotation.page.amount = Math.round(count * unityPrice.page);
            quotation.page.count = count;
            
            if (count > 0) {
                dom.form.page.resum.container.classList.remove('display-none');
                dom.form.page.resum.text.textContent = count.toString();
                dom.form.home.resum.text.textContent = '1 page d\'accueil';
                dom.form.page.resum.price.textContent = quotation.page.amount.toString();
                dom.form.inputs.quotations.page_count.value = quotation.page.count;
                dom.form.inputs.quotations.page_price.value = quotation.page.amount;
            } else {
                dom.form.page.resum.container.classList.add('display-none');
                dom.form.page.resum.text.textContent = '0';
                dom.form.page.resum.price.textContent = '0';
                dom.form.inputs.quotations.page_count.value = 0;
                dom.form.inputs.quotations.page_price.value = 0;
            }
            
            calculateDesign('calculation');
        }
        
        if (counter === 'number-of-rubriques') {
            quotation.section.amount = Math.round(count * unityPrice.section.price)
            quotation.section.count = count;
            
            if (count > 0) {
                dom.form.section.resum.container.classList.remove('display-none');
                dom.form.section.resum.text.textContent = count.toString();
                dom.form.section.resum.price.textContent = quotation.section.amount.toString();
                dom.form.inputs.quotations.section_count.value = quotation.section.count;
                dom.form.inputs.quotations.section_price.value = quotation.section.amount;
            } else {
                dom.form.section.resum.container.classList.add('display-none');
                dom.form.section.resum.text.textContent = '0';
                dom.form.section.resum.price.textContent = '0';
                dom.form.inputs.quotations.section_count.value = 0;
                dom.form.inputs.quotations.section_price.value = 0;
            }
            
            calculateDesign('calculation');
        }
        
        if (counter === 'number-of-contact-simple-forms') {
            quotation.contact.simpleForm.amount = Math.round(count * unityPrice.contact.simpleForm);
            quotation.contact.simpleForm.count = count;
            
            if (count > 0) {
                dom.form.contact.simpleForm.resum.container.classList.remove('display-none');
                dom.form.contact.simpleForm.resum.text.textContent = count.toString();
                dom.form.contact.simpleForm.resum.price.textContent = quotation.contact.simpleForm.amount.toString();
                dom.form.inputs.quotations.section_simple_form_count.value = quotation.contact.simpleForm.count;
                dom.form.inputs.quotations.section_simple_form_price.value = quotation.contact.simpleForm.amount;
            } else {
                dom.form.contact.simpleForm.resum.container.classList.add('display-none');
                dom.form.contact.simpleForm.resum.text.textContent = '0';
                dom.form.contact.simpleForm.resum.price.textContent = '0';
                dom.form.inputs.quotations.section_simple_form_count.value = 0;
                dom.form.inputs.quotations.section_simple_form_price.value = 0;
            }
            
            calculateDesign('calculation');
        }
        
        if (counter === 'number-of-contact-multi-form') {
            quotation.contact.multiForm.amount = Math.round(count * unityPrice.contact.multiForm);
            quotation.contact.multiForm.count = count;
            
            if (count > 0) {
                dom.form.contact.multiForm.resum.container.classList.remove('display-none');
                dom.form.contact.multiForm.resum.text.textContent = count.toString();
                dom.form.contact.multiForm.resum.price.textContent = quotation.contact.multiForm.amount.toString();
                dom.form.inputs.quotations.section_multi_form_count.value = quotation.contact.multiForm.count;
                dom.form.inputs.quotations.section_multi_form_price.value = quotation.contact.multiForm.amount;
            } else {
                dom.form.contact.multiForm.resum.container.classList.add('display-none');
                dom.form.contact.multiForm.resum.text.textContent = '0';
                dom.form.contact.multiForm.resum.price.textContent = '0';
                dom.form.inputs.quotations.section_multi_form_count.value = 0;
                dom.form.inputs.quotations.section_multi_form_price.value = 0;
            }
            
            calculateDesign('calculation');
        }
        
        if (counter === 'external-tools') {
            quotation.externalTool.amount = Math.round(count * unityPrice.externalTool);
            quotation.externalTool.count = count;
            
            if (count > 0) {
                dom.form.externalTool.resum.container.classList.remove('display-none');
                dom.form.externalTool.resum.text.textContent = count.toString();
                dom.form.externalTool.resum.price.textContent = quotation.externalTool.amount.toString();
                dom.form.inputs.quotations.externaltool_count.value = quotation.externalTool.count;
                dom.form.inputs.quotations.externaltool_price.value = quotation.externalTool.amount;
            } else {
                dom.form.externalTool.resum.container.classList.add('display-none');
                dom.form.externalTool.resum.text.textContent = '0';
                dom.form.externalTool.resum.price.textContent = '0';
                dom.form.inputs.quotations.externaltool_count.value = 0;
                dom.form.inputs.quotations.externaltool_price.value = 0;
            }
        }
        
        if (counter === 'automated-process') {
            quotation.automatedProcess.amount = Math.round(count * unityPrice.automatedProcess);
            quotation.automatedProcess.count = count;
            
            if (count > 0) {
                dom.form.automatedProcess.resum.container.classList.remove('display-none');
                dom.form.automatedProcess.resum.text.textContent = count.toString();
                dom.form.automatedProcess.resum.price.textContent = quotation.automatedProcess.amount.toString();
                dom.form.inputs.quotations.automated_count.value = quotation.automatedProcess.count;
                dom.form.inputs.quotations.automated_price.value = quotation.automatedProcess.amount;
            } else {
                dom.form.automatedProcess.resum.container.classList.add('display-none');
                dom.form.automatedProcess.resum.text.textContent = '0';
                dom.form.automatedProcess.resum.price.textContent = '0';
                dom.form.inputs.quotations.automated_count.value = 0;
                dom.form.inputs.quotations.automated_price.value = 0;
            }
        }
        
        if (counter === 'tracking-services') {
            quotation.tracking.amount = Math.round(count * unityPrice.tracking);
            quotation.tracking.count = count;
            
            if (count > 0) {
                dom.form.tracking.resum.container.classList.remove('display-none');
                dom.form.tracking.resum.text.textContent = count.toString();
                dom.form.tracking.resum.price.textContent = quotation.tracking.amount.toString();
                dom.form.inputs.quotations.tracking_count.value = quotation.tracking.count;
                dom.form.inputs.quotations.tracking_price.value = quotation.tracking.amount;
            } else {
                dom.form.tracking.resum.container.classList.add('display-none');
                dom.form.tracking.resum.text.textContent = '0';
                dom.form.tracking.resum.price.textContent = '0';
                dom.form.inputs.quotations.tracking_count.value = 0;
                dom.form.inputs.quotations.tracking_price.value = 0;
            }
        }
        
        calculateTotal();
    }
    
    function calculateCheckbox(service, checked) {
        if (service === 'home') {
            quotation.home = checked ? unityPrice.home : 0;
            
            if (checked) {
                dom.form.home.resum.container.classList.remove('display-none');
                dom.form.home.resum.text.textContent = '1 site one page';
                dom.form.home.resum.price.textContent = quotation.home.toString();
                dom.form.inputs.quotations.homepage_count.value = 1;
                dom.form.inputs.quotations.homepage_price.value = quotation.home;
            } else {
                dom.form.home.resum.container.classList.add('display-none');
                dom.form.home.resum.price.textContent = '0';
                dom.form.inputs.quotations.homepage_count.value = 0;
                dom.form.inputs.quotations.homepage_price.value = 0;
            }
            
            calculateDesign('calculation');
        }
        
        if (service === 'rubriques-categories') {
            quotation.section.category = checked ? quotation.section.count * unityPrice.section.category : 0;
            
            if (checked) {
                dom.form.section.category.resum.container.classList.remove('display-none');
                dom.form.section.category.resum.price.textContent = quotation.section.category.toString();
                dom.form.inputs.quotations.section_category_count.value = quotation.section.count;
                dom.form.inputs.quotations.section_category_price.value = quotation.section.category;
            } else {
                dom.form.section.category.resum.container.classList.add('display-none');
                dom.form.section.category.resum.price.textContent = '0';
                dom.form.inputs.quotations.section_category_count.value = 0;
                dom.form.inputs.quotations.section_category_price.value = 0;
            }
            
            calculateDesign('calculation');
        }
        
        if (service === 'rubriques-categories-pages') {
            quotation.section.listingCategory = checked ? unityPrice.section.listingCategory : 0;
            
            if (checked) {
                dom.form.section.listingCategory.resum.container.classList.remove('display-none');
                dom.form.section.listingCategory.resum.price.textContent = quotation.section.listingCategory.toString();
                dom.form.inputs.quotations.section_category_list_count.value = quotation.section.count;
                dom.form.inputs.quotations.section_category_list_price.value = quotation.section.listingCategory;
            } else {
                dom.form.section.listingCategory.resum.container.classList.add('display-none');
                dom.form.section.listingCategory.resum.price.textContent = '0';
                dom.form.inputs.quotations.section_category_list_count.value = 0;
                dom.form.inputs.quotations.section_category_list_price.value = 0;
            }
            
            calculateDesign('calculation');
        }
        
        if (service === 'e-commerce') {
            quotation.ecommerce.module = checked ? unityPrice.ecommerce.module : 0;
            
            if (checked) {
                dom.form.ecommerce.module.resum.container.classList.remove('display-none');
                dom.form.ecommerce.module.resum.price.textContent = quotation.ecommerce.module.toString();
                dom.form.inputs.quotations.ecommerce_count.value = 1;
                dom.form.inputs.quotations.ecommerce_price.value = quotation.ecommerce.module;
            } else {
                dom.form.ecommerce.module.resum.container.classList.add('display-none');
                dom.form.ecommerce.module.resum.price.textContent = '0';
                dom.form.inputs.quotations.ecommerce_count.value = 0;
                dom.form.inputs.quotations.ecommerce_price.value = 0;
            }
            
            calculateDesign('calculation');
        }
        
        if (service === 'stripe' || service === 'apple-pay' || service === 'google-pay' || service === 'paypal') {
            if (service === 'stripe') {
                quotation.ecommerce.payments.stripe = checked ? unityPrice.ecommerce.stripe : 0;
                
                if (checked) {
                    dom.form.ecommerce.stripe.resum.container.classList.remove('display-none');
                    dom.form.ecommerce.stripe.resum.price.textContent = quotation.ecommerce.payments.stripe.toString();
                    dom.form.inputs.quotations.stripe_count.value = 1;
                    dom.form.inputs.quotations.stripe_price.value = quotation.ecommerce.payments.stripe;
                } else {
                    dom.form.ecommerce.stripe.resum.container.classList.add('display-none');
                    dom.form.ecommerce.stripe.resum.price.textContent = '0';
                    dom.form.inputs.quotations.stripe_count.value = 0;
                    dom.form.inputs.quotations.stripe_price.value = 0;
                }
            }
            
            if (service === 'apple-pay') {
                quotation.ecommerce.payments.applepay = checked ? unityPrice.ecommerce.applepay : 0;
                
                if (checked) {
                    dom.form.ecommerce.applepay.resum.container.classList.remove('display-none');
                    dom.form.ecommerce.applepay.resum.price.textContent = quotation.ecommerce.payments.applepay.toString();
                    dom.form.inputs.quotations.applepay_count.value = 1;
                    dom.form.inputs.quotations.applepay_price.value = quotation.ecommerce.payments.applepay;
                } else {
                    dom.form.ecommerce.applepay.resum.container.classList.add('display-none');
                    dom.form.ecommerce.applepay.resum.price.textContent = '0';
                    dom.form.inputs.quotations.applepay_count.value = 0;
                    dom.form.inputs.quotations.applepay_price.value = 0;
                }
            }
            
            if (service === 'google-pay') {
                quotation.ecommerce.payments.googlepay = checked ? unityPrice.ecommerce.googlepay : 0;
                
                if (checked) {
                    dom.form.ecommerce.googlepay.resum.container.classList.remove('display-none');
                    dom.form.ecommerce.googlepay.resum.price.textContent = quotation.ecommerce.payments.googlepay.toString();
                    dom.form.inputs.quotations.googlepay_count.value = 1;
                    dom.form.inputs.quotations.googlepay_price.value = quotation.ecommerce.payments.googlepay;
                } else {
                    dom.form.ecommerce.googlepay.resum.container.classList.add('display-none');
                    dom.form.ecommerce.googlepay.resum.price.textContent = '0';
                    dom.form.inputs.quotations.googlepay_count.value = 0;
                    dom.form.inputs.quotations.googlepay_price.value = 0;
                }
            }
            
            if (service === 'paypal') {
                quotation.ecommerce.payments.paypal = checked ? unityPrice.ecommerce.paypal : 0;
                
                if (checked) {
                    dom.form.ecommerce.paypal.resum.container.classList.remove('display-none');
                    dom.form.ecommerce.paypal.resum.price.textContent = quotation.ecommerce.payments.paypal.toString();
                    dom.form.inputs.quotations.paypal_count.value = 1;
                    dom.form.inputs.quotations.paypal_price.value = quotation.ecommerce.payments.paypal;
                } else {
                    dom.form.ecommerce.paypal.resum.container.classList.add('display-none');
                    dom.form.ecommerce.googlepay.resum.price.textContent = '0';
                    dom.form.inputs.quotations.paypal_count.value = 0;
                    dom.form.inputs.quotations.paypal_price.value = 0;
                }
            }
            
            let payments = Math.round(quotation.ecommerce.payments.stripe)
                + Math.round(quotation.ecommerce.payments.applepay)
                + Math.round(quotation.ecommerce.payments.googlepay)
                + Math.round(quotation.ecommerce.payments.paypal);
            quotation.ecommerce.payments.total = Math.max(payments - unityPrice.ecommerce.stripe, 0);
        }
        
        if (service === 'discount-coupon') {
            quotation.ecommerce.discount = checked ? unityPrice.ecommerce.discount : 0;
            
            if (checked) {
                dom.form.ecommerce.discount.resum.container.classList.remove('display-none');
                dom.form.ecommerce.discount.resum.price.textContent = quotation.ecommerce.discount.toString();
                dom.form.inputs.quotations.reduction_count.value = 1;
                dom.form.inputs.quotations.reduction_price.value = quotation.ecommerce.discount;
            } else {
                dom.form.ecommerce.discount.resum.container.classList.add('display-none');
                dom.form.ecommerce.discount.resum.price.textContent = '0';
                dom.form.inputs.quotations.reduction_count.value = 0;
                dom.form.inputs.quotations.reduction_price.value = 0;
            }
        }
        
        if (service === 'cookie-consent') {
            quotation.cookie = checked ? unityPrice.cookie : 0;
            
            if (checked) {
                dom.form.cookie.resum.container.classList.remove('display-none');
                dom.form.cookie.resum.price.textContent = quotation.cookie.toString();
                dom.form.inputs.quotations.cookie_count.value = 1;
                dom.form.inputs.quotations.cookie_price.value = quotation.cookie;
            } else {
                dom.form.cookie.resum.container.classList.add('display-none');
                dom.form.cookie.resum.price.textContent = '0';
                dom.form.inputs.quotations.cookie_count.value = 0;
                dom.form.inputs.quotations.cookie_price.value = 0;
            }
        }
        
        if (service === 'chatGPT-text') {
            quotation.chatGPTText = checked ? (quotation.page.count + 1) * unityPrice.chatGPTText : 0;
            
            if (checked) {
                dom.form.chatGPTText.resum.container.classList.remove('display-none');
                dom.form.chatGPTText.resum.price.textContent = quotation.chatGPTText.toString();
                dom.form.inputs.quotations.chatgpttext_count.value = quotation.page.count + 1;
                dom.form.inputs.quotations.chatgpttext_price.value = quotation.page.amount;
            } else {
                dom.form.chatGPTText.resum.container.classList.add('display-none');
                dom.form.chatGPTText.resum.price.textContent = '0';
                dom.form.inputs.quotations.chatgpttext_count.value = 0;
                dom.form.inputs.quotations.chatgpttext_price.value = 0;
            }
        }
        
        if (service === 'social-media-links') {
            quotation.socialLink = checked ? unityPrice.socialLink : 0;
            
            if (checked) {
                dom.form.socialLink.resum.container.classList.remove('display-none');
                dom.form.socialLink.resum.price.textContent = quotation.socialLink.toString();
                dom.form.inputs.quotations.social_count.value = 1;
                dom.form.inputs.quotations.social_price.value = quotation.socialLink;
            } else {
                dom.form.socialLink.resum.container.classList.add('display-none');
                dom.form.socialLink.resum.price.textContent = '0';
                dom.form.inputs.quotations.social_count.value = 0;
                dom.form.inputs.quotations.social_price.value = 0;
            }
        }
        
        if (service === 'google-maps') {
            quotation.googleMaps = checked ? unityPrice.googleMaps : 0;
            
            if (checked) {
                dom.form.googleMaps.resum.container.classList.remove('display-none');
                dom.form.googleMaps.resum.price.textContent = quotation.googleMaps.toString();
                dom.form.inputs.quotations.maps_count.value = 1;
                dom.form.inputs.quotations.maps_price.value = quotation.googleMaps;
            } else {
                dom.form.googleMaps.resum.container.classList.add('display-none');
                dom.form.googleMaps.resum.price.textContent = '0';
                dom.form.inputs.quotations.maps_count.value = 0;
                dom.form.inputs.quotations.maps_price.value = 0;
            }
        }
        
        calculateTotal();
    }
    
    function calculateRadio(service, value) {
        if (service === 'design') {
            calculateDesign(value);
            dom.form.design.custom.resum.container.classList.add('display-none');
            dom.form.design.template.resum.container.classList.add('display-none');
            dom.form.inputs.quotations.design_type.value = value;
            dom.form.inputs.quotations.design_price.value = quotation.design.amount;
            
            if (value === 'Custom Template') {
                dom.form.design.template.resum.container.classList.remove('display-none');
                dom.form.design.template.resum.price.textContent = quotation.design.template.toString();
            } else if (value === 'Custom Design') {
                dom.form.design.custom.resum.container.classList.remove('display-none');
                dom.form.design.custom.resum.price.textContent = quotation.design.custom.toString();
            } else {
                dom.form.design.template.resum.price.textContent = '0';
                dom.form.design.custom.resum.price.textContent = '0';
            }
        }
        
        if (service === 'adobe-stock') {
            value = parseInt(value);
            
            if (value === 0) {
                dom.form.adobe["100"].resum.price.textContent = '0';
                dom.form.adobe["40"].resum.price.textContent = '0';
                dom.form.inputs.quotations.adobe_type.value = '0 Images Adobe Stock';
                quotation.adobe = 0;
            } else if (value === 40) {
                dom.form.adobe["40"].resum.container.classList.remove('display-none');
                dom.form.adobe["40"].resum.price.textContent = quotation.adobe.toString();
                dom.form.adobe["100"].resum.price.textContent = '0';
                dom.form.inputs.quotations.adobe_type.value = '40 Images Adobe Stock';
                quotation.adobe = unityPrice.adobe["40"];
            } else {
                dom.form.adobe["100"].resum.container.classList.remove('display-none');
                dom.form.adobe["100"].resum.price.textContent = quotation.adobe.toString();
                dom.form.adobe["40"].resum.price.textContent = '0';
                dom.form.inputs.quotations.adobe_type.value = '100 Images Adobe Stock';
                quotation.adobe = unityPrice.adobe["100"];
            }
            
            dom.form.adobe["40"].resum.container.classList.add('display-none');
            dom.form.adobe["100"].resum.container.classList.add('display-none');
            dom.form.inputs.quotations.adobe_price.value = quotation.adobe;
        }
        
        if (service === 'maintain') {
            quotation.totals.main.maintain = value === 'maintain-0' ? 0 : value === 'maintain-1' ? unityPrice.maintain["1"] : unityPrice.maintain["3"];
            dom.pricing.maintain.delays.forEach(function (maintainDelay) {
                maintainDelay.textContent = value === 'maintain-0' ? '0' : value === 'maintain-1' ? '0,5' : '2';
            });
            
            if (value === 'maintain-1' || value === 'maintain-3') {
                dom.pricing.maintain.knight.container.classList.remove('display-none');
                dom.pricing.maintain.queen.container.classList.remove('display-none');
                dom.pricing.maintain.king.container.classList.remove('display-none');
                
                if (value === 'maintain-1') {
                    dom.form.maintain["3"].resum.container.classList.add('display-none');
                    dom.form.maintain["1"].resum.container.classList.remove('display-none');
                    dom.form.maintain["1"].resum.price.textContent = quotation.totals.main.maintain.toString();
                    dom.form.inputs.quotations.maintain_type.value = 0.5;
                } else if (value === 'maintain-3') {
                    dom.form.maintain["3"].resum.container.classList.remove('display-none');
                    dom.form.maintain["1"].resum.container.classList.add('display-none');
                    dom.form.maintain["3"].resum.price.textContent = quotation.totals.main.maintain.toString();
                    dom.form.inputs.quotations.maintain_type.value = 2;
                }
            } else {
                dom.pricing.maintain.knight.container.classList.add('display-none');
                dom.pricing.maintain.queen.container.classList.add('display-none');
                dom.pricing.maintain.king.container.classList.add('display-none');
                dom.form.maintain["3"].resum.container.classList.add('display-none');
                dom.form.maintain["1"].resum.container.classList.add('display-none');
                dom.form.maintain["1"].resum.price.textContent = '0';
                dom.form.maintain["3"].resum.price.textContent = '0';
                dom.form.inputs.quotations.maintain_type.value = 0;
            }
        }
        
        if (service === 'subscription') {
            subscriptions.selected = value;
            dom.form.inputs.quotations.maintain_total.value = quotation.totals.main.maintain;
            dom.form.inputs.quotations.site_total.value = quotation.totals.main.site;
            
            if (value === 'Knight Pack') {
                dom.form.inputs.quotations.maintain_discount.value = quotation.totals.main.maintain - quotation.totals.maintain.knight;
                dom.form.inputs.quotations.maintain_pack.value = quotation.totals.maintain.knight;
                dom.form.inputs.quotations.site_discount.value = quotation.totals.main.site - quotation.totals.site.knight;
                dom.form.inputs.quotations.site_pack.value = quotation.totals.site.knight;
                dom.form.inputs.quotations.deposite.value = Math.round(deposites.amount.knight);
                dom.form.inputs.quotations.subscription.value = subscriptions.knight;
                dom.form.inputs.quotations.pack.value = 'Pack du Chevalier';
            }
            
            if (value === 'Queen Pack') {
                dom.form.inputs.quotations.maintain_discount.value = quotation.totals.main.maintain - quotation.totals.maintain.queen;
                dom.form.inputs.quotations.maintain_pack.value = quotation.totals.maintain.queen;
                dom.form.inputs.quotations.site_discount.value = quotation.totals.main.site - quotation.totals.site.queen;
                dom.form.inputs.quotations.site_pack.value = quotation.totals.site.queen;
                dom.form.inputs.quotations.deposite.value = Math.round(deposites.amount.queen);
                dom.form.inputs.quotations.subscription.value = subscriptions.queen;
                dom.form.inputs.quotations.pack.value = 'Pack de la Reine';
            }
            
            if (value === 'King Pack') {
                dom.form.inputs.quotations.maintain_discount.value = quotation.totals.main.maintain - quotation.totals.maintain.king;
                dom.form.inputs.quotations.maintain_pack.value = quotation.totals.maintain.king;
                dom.form.inputs.quotations.site_discount.value = quotation.totals.main.site - quotation.totals.site.king;
                dom.form.inputs.quotations.site_pack.value = quotation.totals.site.king;
                dom.form.inputs.quotations.deposite.value = Math.round(deposites.amount.king);
                dom.form.inputs.quotations.subscription.value = subscriptions.king;
                dom.form.inputs.quotations.pack.value = 'Pack du Roi';
            }
            
            calculateTotal();
        }
        
        calculateTotal();
    }
    
    function calculateDesign(type) {
        let template = {
            home: 0,
            page: 0,
            section: {
                module: 0,
                listingCategory: 0
            },
            contact: {
                simpleForm: 0,
                multiForm: 0
            },
            ecommerce: {
                product: 0,
                listing: 0,
                cart: 0,
                button: 0,
                confirmation: 0,
                total: 0
            },
        }
        
        let custom = {
            home: 0,
            page: 0,
            section: {
                module: 0,
                listingCategory: 0
            },
            contact: {
                simpleForm: 0,
                multiForm: 0
            },
            ecommerce: {
                product: 0,
                listing: 0,
                cart: 0,
                button: 0,
                confirmation: 0,
                total: 0
            }
        }
        
        template.home = delay.design.template.home;
        custom.home = delay.design.custom.home;
        
        if (quotation.page.count) {
            template.page = delay.design.template.page;
            custom.page = delay.design.custom.page;
        }
        
        if (quotation.section.count) {
            template.section.module = delay.design.template.section.module;
            custom.section.module = delay.design.custom.section.module;
        }
        
        if (quotation.section.listingCategory) {
            template.section.listingCategory = delay.design.template.section.listingCategory;
            custom.section.listingCategory = delay.design.custom.section.listingCategory;
        }
        
        if (quotation.contact.simpleForm.count) {
            template.contact.simpleForm = delay.design.template.contact.simpleForm;
            custom.contact.simpleForm = delay.design.custom.contact.simpleForm;
        }
        
        if (quotation.contact.multiForm.count) {
            template.contact.multiForm = delay.design.template.contact.multiForm;
            custom.contact.multiForm = delay.design.custom.contact.multiForm;
        }
        
        if (quotation.ecommerce.module) {
            template.ecommerce.product = delay.design.template.ecommerce.product;
            custom.ecommerce.product = delay.design.custom.ecommerce.product;
            
            template.ecommerce.listing = delay.design.template.ecommerce.listing;
            custom.ecommerce.listing = delay.design.custom.ecommerce.listing;
            
            template.ecommerce.cart = delay.design.template.ecommerce.cart;
            custom.ecommerce.cart = delay.design.custom.ecommerce.cart;
            
            template.ecommerce.button = delay.design.template.ecommerce.button;
            custom.ecommerce.button = delay.design.custom.ecommerce.button;
            
            template.ecommerce.confirmation = delay.design.template.ecommerce.confirmation;
            custom.ecommerce.confirmation = delay.design.custom.ecommerce.confirmation;
            
            template.ecommerce.total = template.ecommerce.product + template.ecommerce.listing + template.ecommerce.cart + template.ecommerce.button + template.ecommerce.confirmation;
            custom.ecommerce.total = custom.ecommerce.product + custom.ecommerce.listing + custom.ecommerce.cart + custom.ecommerce.button + custom.ecommerce.confirmation;
        }
        
        quotation.design.template = Math.round((template.home + template.page + template.section.module + template.section.listingCategory + template.contact.simpleForm + template.contact.multiForm + template.ecommerce.total) * thdesign);
        quotation.design.custom = Math.round((custom.home + custom.page + custom.section.module + custom.section.listingCategory + custom.contact.simpleForm + custom.contact.multiForm + custom.ecommerce.total) * thdesign);
        
        if (type !== 'calculation') {
            quotation.design.amount = type === 'Template Only' ? 200 : type === 'Custom Template' ? quotation.design.template : quotation.design.custom;
        }
    }
    
    function calculateTotal() {
        dom.form.design.template.label.textContent = Math.round(quotation.design.template).toString();
        dom.form.design.custom.label.textContent = Math.round(quotation.design.custom).toString();
        
        quotation.totals.main.site = quotation.home
            + quotation.page.amount
            + quotation.section.amount
            + quotation.section.category
            + quotation.section.listingCategory
            + quotation.contact.simpleForm.amount
            + quotation.contact.multiForm.amount
            + quotation.ecommerce.module
            + quotation.ecommerce.payments.total
            + quotation.ecommerce.discount
            + quotation.design.amount
            + quotation.adobe
            + quotation.externalTool.amount
            + quotation.automatedProcess.amount
            + quotation.tracking.amount
            + quotation.cookie
            + quotation.chatGPTText
            + quotation.socialLink
            + quotation.googleMaps;
        
        quotation.totals.site.knight = Math.round(quotation.totals.main.site * discounts.knight);
        quotation.totals.site.queen = Math.round(quotation.totals.main.site * discounts.queen);
        quotation.totals.site.king = Math.round(quotation.totals.main.site * discounts.king);
        quotation.totals.maintain.knight = Math.round(quotation.totals.main.maintain * discounts.knight);
        quotation.totals.maintain.queen = Math.round(quotation.totals.main.maintain * discounts.queen);
        quotation.totals.maintain.king = Math.round(quotation.totals.main.maintain * discounts.king);
        deposites.amount.knight = Math.round(quotation.totals.site.knight * deposites.coefficient.knight);
        deposites.amount.queen = Math.round(quotation.totals.site.queen * deposites.coefficient.queen);
        deposites.amount.king = Math.round(quotation.totals.site.king * deposites.coefficient.king);
        subscriptions.knight = Math.round((quotation.totals.site.knight + quotation.totals.maintain.knight - deposites.amount.knight) / subscriptions.time);
        subscriptions.queen = Math.round((quotation.totals.site.queen + quotation.totals.maintain.queen - deposites.amount.queen) / subscriptions.time);
        subscriptions.king = Math.round((quotation.totals.site.king + quotation.totals.maintain.king - deposites.amount.king) / subscriptions.time);
        
        if (subscriptions.selected) {
            if (subscriptions.selected === 'Knight Pack') {
                dom.pricing.totals.main.textContent = Math.round(quotation.totals.site.knight).toString();
            }
            
            if (subscriptions.selected === 'Queen Pack') {
                dom.pricing.totals.main.textContent = Math.round(quotation.totals.site.queen).toString();
            }
            
            if (subscriptions.selected === 'King Pack') {
                dom.pricing.totals.main.textContent = Math.round(quotation.totals.site.king).toString();
            }
        } else {
            dom.pricing.totals.main.textContent = Math.round(quotation.totals.main.site).toString();
        }
        showResum();
        updatePricePackages();
        calculateDeadlines();
    }
    
    function showResum() {
        if (subscriptions.yearly) {
            dom.pricing.discounts.knight.noDiscount.classList.add('display-none');
        } else {
            dom.pricing.discounts.knight.noDiscount.classList.remove('display-none');
        }
        
        if (quotation.totals.main.site !== quotation.totals.site.knight) {
            dom.pricing.discounts.knight.site.container.classList.remove('display-none');
        } else {
            dom.pricing.discounts.knight.site.container.classList.add('display-none');
        }
        
        if (quotation.totals.main.maintain !== quotation.totals.maintain.knight) {
            dom.pricing.discounts.knight.maintain.container.classList.remove('display-none');
        } else {
            dom.pricing.discounts.knight.maintain.container.classList.add('display-none');
        }
        
        dom.pricing.discounts.wrappers.maintains.forEach(function (discountMaintain) {
            if (quotation.totals.maintain.queen > 0) {
                discountMaintain.classList.remove('display-none');
            } else {
                discountMaintain.classList.add('display-none');
            }
        });
    }
    
    function calculateDeadlines() {
        let deadline = 0;
        
        if (quotation.home) {
            deadline = deadline + delay.home;
        }
        
        if (quotation.page.count) {
            deadline = deadline + delay.page * quotation.page.count;
        }
        
        if (quotation.section.count) {
            deadline = deadline + delay.section.time * quotation.section.count;
        }
        
        if (quotation.section.category) {
            deadline = deadline + delay.section.category * quotation.section.count;
        }
        
        if (quotation.section.listingCategory) {
            deadline = deadline + delay.section.listingCategory * quotation.section.count;
        }
        
        if (quotation.contact.simpleForm.count) {
            deadline = deadline + delay.contact.simpleForm * quotation.contact.simpleForm.count;
        }
        
        if (quotation.contact.multiForm.count) {
            deadline = deadline + delay.contact.multiForm * quotation.contact.multiForm.count;
        }
        
        if (quotation.ecommerce.module) {
            deadline = deadline + delay.ecommerce.module;
        }
        
        if (quotation.ecommerce.payments.stripe) {
            deadline = deadline + delay.ecommerce.stripe;
        }
        
        if (quotation.ecommerce.payments.applepay) {
            deadline = deadline + delay.ecommerce.applepay;
        }
        
        if (quotation.ecommerce.payments.googlepay) {
            deadline = deadline + delay.ecommerce.googlepay;
        }
        
        if (quotation.ecommerce.payments.paypal) {
            deadline = deadline + delay.ecommerce.paypal;
        }
        
        if (quotation.ecommerce.discount) {
            deadline = deadline + delay.ecommerce.discount;
        }
        
        if (quotation.design.amount) {
            if (quotation.design.amount === quotation.design.template) {
                deadline = deadline + quotation.design.template / thdesign;
            } else {
                deadline = deadline + quotation.design.custom / thdesign;
            }
        }
        
        if (quotation.externalTool.count) {
            deadline = deadline + delay.externalTool * quotation.externalTool.count;
        }
        
        if (quotation.automatedProcess.count) {
            deadline = deadline + delay.automatedProcess * quotation.automatedProcess.count;
        }
        
        if (quotation.tracking.count) {
            deadline = deadline + delay.tracking * quotation.tracking.count;
        }
        
        if (quotation.cookie) {
            deadline = deadline + delay.cookie;
        }
        
        if (quotation.chatGPTText) {
            deadline = deadline + delay.chatGPTText * quotation.page.count;
        }
        
        if (quotation.socialLink) {
            deadline = deadline + delay.socialLink;
        }
        
        if (quotation.googleMaps) {
            deadline = deadline + delay.googleMaps;
        }
        
        deadline = Math.round(deadline * 1.3 / 7);
        
        dom.pricing.deadlines.forEach(function (container) {
            container.textContent = deadline.toString();
        });
        
        dom.form.inputs.quotations.delay.value = deadline;
    }
    
    function updatePricePackages() {
        // SUBSCRIPTION TIME
        dom.pricing.subscriptions.months.forEach(function (months) {
            months.textContent = subscriptions.time.toString();
        });
        
        // TOTALS PER PACK
        dom.pricing.totals.knight.textContent = quotation.totals.site.knight.toString();
        dom.pricing.totals.queen.textContent = quotation.totals.site.queen.toString();
        dom.pricing.totals.king.textContent = quotation.totals.site.king.toString();
        
        // DESPOSITES
        deposites.amount.knight = quotation.totals.site.knight * deposites.coefficient.knight;
        deposites.amount.queen = quotation.totals.site.queen * deposites.coefficient.queen;
        deposites.amount.king = quotation.totals.site.queen * deposites.coefficient.king;
        dom.pricing.deposites.knight.textContent = Math.round(deposites.amount.knight).toString();
        dom.pricing.deposites.queen.textContent = Math.round(deposites.amount.queen).toString();
        dom.pricing.deposites.king.textContent = Math.round(deposites.amount.king).toString();
        
        // SUBSCRIPTIONS
        subscriptions.knight = Math.round((quotation.totals.site.knight - deposites.amount.knight) / subscriptions.time);
        subscriptions.queen = Math.round((quotation.totals.site.queen - deposites.amount.queen) / subscriptions.time);
        subscriptions.king = Math.round((quotation.totals.site.king - deposites.amount.king) / subscriptions.time);
        dom.pricing.subscriptions.knight.textContent = subscriptions.knight.toString();
        dom.pricing.subscriptions.queen.textContent = subscriptions.queen.toString();
        dom.pricing.subscriptions.king.textContent = subscriptions.king.toString();
        
        // DISCOUNTS SITE
        dom.pricing.discounts.knight.site.text.textContent = Math.round(quotation.totals.main.site - quotation.totals.site.knight).toString();
        dom.pricing.discounts.queen.site.container.textContent = Math.round(quotation.totals.main.site - quotation.totals.site.queen).toString();
        dom.pricing.discounts.king.site.container.textContent = Math.round(quotation.totals.main.site - quotation.totals.site.king).toString();
        
        // MAINTAINS
        dom.pricing.maintain.knight.text.textContent = Math.round(quotation.totals.maintain.knight).toString();
        dom.pricing.maintain.queen.text.textContent = Math.round(quotation.totals.maintain.queen).toString();
        dom.pricing.maintain.king.text.textContent = Math.round(quotation.totals.maintain.king).toString();
        
        // DISCOUNTS MAINTAIN
        dom.pricing.discounts.knight.maintain.text.textContent = Math.round(quotation.totals.main.maintain - quotation.totals.maintain.knight).toString();
        dom.pricing.discounts.queen.maintain.container.textContent = Math.round(quotation.totals.main.maintain - quotation.totals.maintain.queen).toString();
        dom.pricing.discounts.king.maintain.container.textContent = Math.round(quotation.totals.main.maintain - quotation.totals.maintain.king).toString();
    }
});